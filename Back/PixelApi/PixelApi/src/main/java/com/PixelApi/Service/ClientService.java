package com.PixelApi.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.PixelApi.Entity.ClientAccount;
import com.PixelApi.Entity.ClientAccountId;
import com.PixelApi.Entity.Client;
import com.PixelApi.Repository.ClientAccountRepo;
import com.PixelApi.Repository.ClientRepo;
import com.PixelApi.Util.SendMail;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ClientService {

	@Autowired
	SendMail sendMailClass;

	@Autowired
	ClientAccountRepo confirmAccountRepo;

	@Autowired
	ClientRepo clientRepo;

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
			ClientAccount myAccount = confirmAccountRepo.findByClientId(myClient.getId());

			if (myAccount.getConfirmed() == true) {
				log.info("Normal user, account was set up");
				response.put("message", "Existing record given that email");
				response.put("code", "B");
				response.put("codeExplanation", "Existing functional account");
				response.put("id", myClient.getId().toString());
			} else {
				response.put("message", "Existing record given that email, but not activated");
				response.put("code", "C");
				response.put("codeExplanation", "Account hasn't been activated");
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

			if (clientRepo.countByEmail(email) == 0) {
				String encryptedPwd = new BCryptPasswordEncoder().encode(myClient.getAccountKey());
				myClient.setAccountKey(encryptedPwd);
				myResponse = clientRepo.save(myClient);
				sendMail = true;
				log.info("Client saved");
			} else {
				// Update only pwd
				Client existingClient = clientRepo.findByEmail(email);
				existingClient.setAccountKey(new BCryptPasswordEncoder().encode(myClient.getAccountKey()));
				myResponse = clientRepo.save(existingClient);
				log.info("Client just changed pwd xd in the modal flow");
			}

			if (myResponse != null && sendMail == true) {
				ClientAccount confirmAccount = new ClientAccount(confirmationCode, myResponse.getId(), false);
				confirmAccountRepo.save(confirmAccount);
				log.info("Client account saved");

				new Thread(() -> {
					log.info("Sending email to: " + email);
					sendMailClass.sendMail(email, confirmationCode);
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
	public Map<String, String> ConfirmAccount(Long clientId, String token) {

		log.info("Inside confirmAccount method");
		Map<String, String> response = new HashMap<>();

		try {
			ClientAccount account = confirmAccountRepo.findById(new ClientAccountId(clientId, token)).orElse(null);

			if (account == null) {
				log.info("Invalid Token");
				response.put("code", "BB");
				response.put("message", "Invalid token");
			} else {

				log.info("Let's confirm account");
				account.setConfirmed(true);
				confirmAccountRepo.save(account);
				log.info("Account has beed confirmed");
				response.put("code", "AA");
				response.put("message", "Account has beed confirmed");
			}

		} catch (Exception e) {
			log.error("Some problem occured in save method: " + e);
			response.put("code", "666");
			response.put("internal error in confirmAccount", e.toString());
		}

		return response;
	}

	/*
	 * public Client update(Client myClient) { Client updateClient =
	 * clientRepo.findById(myClient.getId()).get(); //
	 * updateClient.setUsername(myClient.getUsername()); myClient.setUserkeyauth(new
	 * BCryptPasswordEncoder().encode(myClient.getUserkeyauth()));
	 * updateClient.setEmail(myClient.getEmail()); return
	 * clientRepo.save(updateClient); }
	 */

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