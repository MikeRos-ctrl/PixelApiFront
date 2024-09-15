package com.PixelApi.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.PixelApi.Entity.TokenAccount;
import com.PixelApi.Entity.ClientAccountId;

@Repository
public interface TokenAccounttRepo extends JpaRepository<TokenAccount, ClientAccountId> {

	Long countByClientId(Long client);

	TokenAccount findByClientId(Long id);

	@Query("SELECT COUNT(t) FROM TokenAccount t WHERE t.clientId = :clientId AND t.reason = :reason AND t.confirmed = :confirmed")
	Long tokenValidation(@Param("clientId") Long clientId, @Param("reason") String reason,
			@Param("confirmed") Boolean confirmed);

}