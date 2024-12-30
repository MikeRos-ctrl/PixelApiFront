package com.PixelApi.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.PixelApi.Entity.Token;

@Repository
public interface TokenRepo extends JpaRepository<Token, String> {

	//Long countByClientId(Long client);

	//Token findByClientId(String id);

	@Query("SELECT COUNT(t) FROM Token t WHERE t.client=:client AND t.reason=:reason AND t.active=:active")
	Long tokenValidation(
			@Param("client") Long client, 
			@Param("reason") String reason,
			@Param("active") Boolean activa);

}