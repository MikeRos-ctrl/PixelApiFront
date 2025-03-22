package com.PixelApi.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.hibernate.annotations.CurrentTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.PixelApi.Entity.Client;
import com.PixelApi.Entity.StripeSubscription;
import com.PixelApi.Entity.StripeSubscriptionDto;
import com.PixelApi.Entity.Token;
import com.PixelApi.Repository.ClientRepo;
import com.PixelApi.Repository.StripeSubscriptionRepo;
import com.PixelApi.Repository.TokenRepo;
import com.PixelApi.Security.Jwt;
import com.PixelApi.Util.SendMail;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ClientService {

	@Autowired
	private final Jwt myJwt = new Jwt();
	
	@Autowired
	SendMail sendMailClass;

	@Autowired
	TokenRepo tokenRepo;

	@Autowired
	ClientRepo clientRepo;

	@Autowired
	StripeSubscriptionRepo stripeRepo;

	@Value("${stripe.public}")
	private String stripePublic;

	@Value("${stripe.secret}")
	private String stripeSecret;

	@Value("${stripe.premium}")
	private String stripePremium;

	@Value("${stripe.premium_plus}")
	private String stripePremiumPlus;

	@Transactional
	public Map<String, String> StripeCredentials(String plan) {

		log.info("Inside StripeCredentials method");
		Map<String, String> response = new HashMap<>();

		try {
			response.put("STRIPE_PUBLIC", stripePublic);
			response.put("STRIPE_SECRET", stripeSecret);
			String planCode = plan.equals("Premium") ? stripePremium : stripePremiumPlus;
			response.put("STRIPE_PLAN_CODE", planCode);

		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			response.put("code", "666");
			response.put("internal error in confirmAccount", e.toString());
		}
		return response;
	}

	@Transactional
	public Map<String, Object> CreateStripeSubscription(StripeSubscriptionDto mySubscription) {

		log.info("Inside CreateStripeSubscription method");
		Map<String, Object> response = new HashMap<>();
		
		try {
			
	        Client myclient = clientRepo.findByEmail(mySubscription.getEmail());
			Timestamp now = new Timestamp(System.currentTimeMillis());
	        LocalDateTime localDateTime = now.toLocalDateTime().plusMonths(1);
	        Timestamp nextMonth = Timestamp.valueOf(localDateTime);
	        String token = myJwt.create(myclient.getClientId().toString(), now, nextMonth);
	        
			StripeSubscription clientubscription = new StripeSubscription(
					mySubscription.getStripeSubscriptionId(),
					myclient.getClientId(), 
				    mySubscription.getPlanTypeId().equals("Premium") ? 1  : 2,
				    true, 
					1,
					now,
					nextMonth,
					token
					);		

			stripeRepo.save(clientubscription);
			log.info("StripeSubscription has been saved");
						
			new Thread(() -> {
				//CREATE TOKEN AND SEND EMAIL
				log.info("Sending email to: " + mySubscription.getEmail());	
				sendMailClass.sendMail(myclient.getEmail(), token, 'C');
				log.info("Email has been sent");

				
				//NEED TO SAVE THE TOKEN SOMEWHERE
				//Add a new field to STRIPE_SUBSCRIPTION BETTER
				
			}).start();
			
			response.put("StripeSubscription", mySubscription);
		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			response.put("code", "666");
			response.put("internal error in confirmAccount", e.toString());
		}
		return response;
	}

	public Map<String, Object> Update(Client myClient) {

		Map<String, Object> response = new HashMap<>();
		log.info("Inside update method");

		Client updateClient = clientRepo.findById(myClient.getClientId()).get();
		updateClient.setEmail(myClient.getEmail());
		updateClient.setAcctKey(new BCryptPasswordEncoder().encode(myClient.getAcctKey()));
		response.put("Updated client", clientRepo.save(updateClient));

		return response;
	}

	public Client Login(String email, String accountKey) {

		log.info("Inside Login method");

		Client myClient = clientRepo.findByEmail(email);
		Boolean answer = new BCryptPasswordEncoder().matches(accountKey, myClient.getAcctKey());
		return (answer) ? myClient : null;
	}

	public Map<String, String> ValidateAccount(String email) {

		log.info("Inside validateAccount method");
		Map<String, String> response = new HashMap<>();

		if (clientRepo.countByEmail(email) == 0) {
			log.info("New account");
			response.put("message", "No existing record given that email");
			response.put("code", "A");
			response.put("codeExplanation", "This is a new account");
		} else {

			Client myClient = clientRepo.findByEmail(email);

			if (tokenRepo.tokenValidation(myClient.getClientId(), "ACCT_CONFIRMATION", true) == 1) {
				log.info("Existing user trying to login, let's validate now the password ");
				response.put("message", "Existing email, let's validate password");
				response.put("code", "B");
				response.put("codeExplanation", "Existing functional account");
				response.put("id", myClient.getClientId().toString());
			} else {
				response.put("message", "Existing record given that email, but not activated");
				response.put("code", "C");
				response.put("codeExplanation", "Account hasn't been activated");
				response.put("additionalField", myClient.getClientId().toString() + "," + myClient.getAcctKey());
				log.info("Account hasn't been activated");
			}
		}
		return response;
	}

	@Transactional
	public Client Save(Client myClient) {

		Client myResponse = null;
		Boolean sendMail = false;

		log.info("Inside save method");

		try {
			String email = myClient.getEmail();
			String confirmationCode = UUID.randomUUID().toString();

			/*
			 * SEND CONFIRMATION EMAIL
			 */

			if (clientRepo.countByEmail(email) == 0) {
				String encryptedPwd = new BCryptPasswordEncoder().encode(myClient.getAcctKey());
				myClient.setAcctKey(encryptedPwd);
				myResponse = clientRepo.save(myClient);
				sendMail = true;
				log.info("Client saved");

				tokenRepo.save(new Token(confirmationCode, myResponse.getClientId(), null, "ACCT_CONFIRMATION", false));
				log.info("Confirmation token saved");

				new Thread(() -> {
					log.info("Sending email to: " + email);
					sendMailClass.sendMail(email, confirmationCode, 'A');
					log.info("Email has been sent");
				}).start();

			} else {

				/*
				 * DON'T SENT CONFIRMATION EMAIL
				 */
				Client existingClient = clientRepo.findByEmail(email);
				existingClient.setAcctKey(new BCryptPasswordEncoder().encode(myClient.getAcctKey()));
				myResponse = clientRepo.save(existingClient);
				log.info("Client just changed pwd xd in the modal flow");
			}

			return myResponse;

		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			return null;
		}
	}

	@Transactional
	public Map<String, String> ForgotPwd(String email) {

		Map<String, String> response = new HashMap<>();
		log.info("Inside ForgotPwd method");

		try {
			
			Long id = clientRepo.findByEmail(email).getClientId();
			Long xd = tokenRepo.tokenValidation(id, "RECOVER_PWD", false);
			
			if (tokenRepo.tokenValidation(id, "RECOVER_PWD", false) == 0) {

				String confirmationCode = UUID.randomUUID().toString();

				tokenRepo.save(new Token(confirmationCode, id, null, "RECOVER_PWD", false));

				log.info("Client token saved");
				response.put("value", id.toString());
				response.put("message", "Email has been sent :)");

				new Thread(() -> {
					log.info("Sending email to: " + email);
					sendMailClass.sendMail(email, confirmationCode, 'B');
					log.info("Email has been sent");

				}).start();
			} else {
				response.put("value", id.toString());
				response.put("message", "Email has already been sent :P");
			}

			return response;

		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			return null;
		}
	}

	@Transactional
	public Map<String, String> ConfirmAccount(String token) {

		log.info("Inside confirmAccount method");
		Map<String, String> response = new HashMap<>();

		try {
			Token myToken = tokenRepo.findById(token).orElse(null);

			if (myToken == null) {
				log.info("Invalid Token");
				response.put("code", "BB");
				response.put("message", "Invalid token");
			} else {

				myToken.setUsed(true);
				tokenRepo.save(myToken);
				log.info("Token has beed confirmed");
				log.info("Token reason: " + myToken.getReason());
				response.put("code", "AA");
				response.put("message", "Token confirmed");
			}

		} catch (Exception e) {
			log.error("Some problem occured in save method: " + e);
			response.put("code", "666");
			response.put("internal error in confirmAccount", e.toString());
		}

		return response;
	}

	public Client FindUserbyUsername(String user) {
		Client myClient = clientRepo.findById(1L).get();
		return myClient;
	}
}