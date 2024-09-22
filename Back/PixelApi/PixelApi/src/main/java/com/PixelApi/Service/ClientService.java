package com.PixelApi.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.PixelApi.Entity.ClientAccountId;
import com.PixelApi.Entity.PaypalOrder;
import com.PixelApi.Entity.TokenAccount;
import com.PixelApi.Entity.Client;
import com.PixelApi.Repository.ClientRepo;
import com.PixelApi.Repository.PaypalRepo;
import com.PixelApi.Repository.TokenAccounttRepo;
import com.PixelApi.Util.SendMail;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ClientService {

	@Autowired
	SendMail sendMailClass;

	@Autowired
	TokenAccounttRepo tokenRepo;

	@Autowired
	ClientRepo clientRepo;

	@Autowired
	PaypalRepo paypalRepo;

	public Map<String, Object> update(Client myClient) {

		Map<String, Object> response = new HashMap<>();
		log.info("Inside update method");

		Client updateClient = clientRepo.findById(myClient.getId()).get();
		updateClient.setEmail(myClient.getEmail());
		updateClient.setAccountKey(new BCryptPasswordEncoder().encode(myClient.getAccountKey()));
		response.put("Updated client", clientRepo.save(updateClient));

		return response;
	}

	public Client Login(String email, String accountKey) {

		log.info("Inside Login method");

		Client myClient = clientRepo.findByEmail(email);
		Boolean answer = new BCryptPasswordEncoder().matches(accountKey, myClient.getAccountKey());
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

			if (tokenRepo.tokenValidation(myClient.getId(), "ACCOUNT-CONFIRMATION", true) == 1) {
				log.info("Existing user trying to login, let's validate now the password ");
				response.put("message", "Existing email, let's validate password");
				response.put("code", "B");
				response.put("codeExplanation", "Existing functional account");
				response.put("id", myClient.getId().toString());
			} else {
				response.put("message", "Existing record given that email, but not activated");
				response.put("code", "C");
				response.put("codeExplanation", "Account hasn't been activated");
				response.put("additionalField", myClient.getId().toString());
				log.info("Account hasn't been activated");
			}
		}
		return response;
	}

	@Transactional
	public Map<String, String> ForgotPwd(String email, Long id) {

		Map<String, String> response = new HashMap<>();
		log.info("Inside ForgotPwd method");

		try {
			/*
			 * Numero de emails sin confirmar se han enviado
			 */
			if (tokenRepo.tokenValidation(id, "FORGET-PWD", false) == 0) {

				String confirmationCode = UUID.randomUUID().toString();
				TokenAccount register = new TokenAccount(confirmationCode, id, false, "FORGET-PWD");
				tokenRepo.save(register);
				log.info("Client token saved");
				response.put("value", "true");
				response.put("message", "Email has been sent :)");

				new Thread(() -> {
					log.info("Sending email to: " + email);
					sendMailClass.sendMail(email, confirmationCode, 'B');
					log.info("Email has been sent");

				}).start();
			} else {
				response.put("value", "false");
				response.put("message", "Email has already been sent :P");
			}

			return response;

		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			return null;
		}
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
				String encryptedPwd = new BCryptPasswordEncoder().encode(myClient.getAccountKey());
				myClient.setAccountKey(encryptedPwd);
				myResponse = clientRepo.save(myClient);
				sendMail = true;
				log.info("Client saved");
			} else {

				/*
				 * DON'T SENT CONFIRMATION EMAIL
				 */
				Client existingClient = clientRepo.findByEmail(email);
				existingClient.setAccountKey(new BCryptPasswordEncoder().encode(myClient.getAccountKey()));
				myResponse = clientRepo.save(existingClient);
				log.info("Client just changed pwd xd in the modal flow");
			}

			if (myResponse != null && sendMail == true) {
				TokenAccount confirmAccount = new TokenAccount(confirmationCode, myResponse.getId(), false,
						"ACCOUNT-CONFIRMATION");
				tokenRepo.save(confirmAccount);
				log.info("Client token saved");

				new Thread(() -> {
					log.info("Sending email to: " + email);
					sendMailClass.sendMail(email, confirmationCode, 'A');
					log.info("Email has been sent");
				}).start();
			}

			return myResponse;

		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			return null;
		}
	}

	@Transactional
	public String Save(PaypalOrder myOrder) {

		log.info("Inside Save paypal order method");

		try {
			paypalRepo.save(myOrder);
			log.info("Order saved");
			return "Order saved";

		} catch (Exception e) {
			log.error("Internal error in save method: " + e);
			return "Internal error in save method";
		}
	}

	@Transactional
	public Map<String, String> ConfirmAccount(Long clientId, String token) {

		log.info("Inside confirmAccount method");
		Map<String, String> response = new HashMap<>();

		try {
			TokenAccount myToken = tokenRepo.findById(new ClientAccountId(clientId, token)).orElse(null);

			if (myToken == null) {
				log.info("Invalid Token");
				response.put("code", "BB");
				response.put("message", "Invalid token");
			} else {

				myToken.setConfirmed(true);
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

	/*
	 * public void delete(Integer id) { Userprofile updateClient =
	 * clientRepo.findById(id).get(); updateClient.setDisabled(true);
	 * clientRepo.save(updateClient); }
	 */

	public Client FindUserbyUsername(String user) {
		Client myClient = clientRepo.findById(1L).get();
		return myClient;
	}
}