package com.PixelApi.Repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.PixelApi.Entity.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {

//	@Query("SELECT id FROM Userprofile WHERE username=:username")
//	Long findIdByUsername(@Param("username") String username);
	
	Client findByEmail(String email);
		
	Long countByEmail(String email);
}