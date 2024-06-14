package com.PixelApi.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.PixelApi.Entity.Userprofile;
import com.PixelApi.Service.ClientService;
import org.springframework.security.core.userdetails.User;

/*
 * First security filter, First of all i revise if an User exists in my db registers, if it exists
 * I upload that user in my spring security context and is ready for the SecurityFilterChain
 */

@Service
public class AuthUser implements UserDetailsService{

	@Autowired
	ClientService service;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	
		Userprofile myUser = service.findUserbyUsername(username);
		
		return User.builder()
				.username(myUser.getUsername())
				.password(myUser.getUserkeyauth())
				.roles(myUser.getRoles().toString())
				.accountLocked(myUser.getLocked())
				.disabled(myUser.getDisabled())
				.build();
	}
	
	@Bean
	public PasswordEncoder myEncoder() {
		return new BCryptPasswordEncoder();
	}
}