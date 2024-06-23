package com.PixelApi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.PixelApi.Entity.Userprofile;
import com.PixelApi.Repository.ClientRepo;

@Service
public class ClientService {

	@Autowired
	ClientRepo clientRepo;

	public Boolean validateAccount(String email) {
		Long answer = clientRepo.countByEmail(email);
		return (answer == 1) ? true : false;
	}
	
	public Userprofile save(Userprofile myClient) {
		myClient.setUserkeyauth(new BCryptPasswordEncoder().encode(myClient.getUserkeyauth()));
		return clientRepo.save(myClient);
	}

	public Userprofile update(Userprofile myClient) {
		Userprofile updateClient = clientRepo.findById(myClient.getId()).get();
		updateClient.setUsername(myClient.getUsername());
		myClient.setUserkeyauth(new BCryptPasswordEncoder().encode(myClient.getUserkeyauth()));
		updateClient.setEmail(myClient.getEmail());
		return clientRepo.save(updateClient);
	}

	/*
	 * public void delete(Integer id) { Userprofile updateClient =
	 * clientRepo.findById(id).get(); updateClient.setDisabled(true);
	 * clientRepo.save(updateClient); }
	 */

	public Userprofile findUserbyUsername(String user) {
		Userprofile myClient = clientRepo.findById(1L).get();
		return myClient;
	}
}