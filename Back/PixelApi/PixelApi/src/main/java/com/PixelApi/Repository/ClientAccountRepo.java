package com.PixelApi.Repository;

import java.sql.Timestamp;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;


import com.PixelApi.Entity.ClientAccount;
import com.PixelApi.Entity.ClientAccountId;


public interface ClientAccountRepo extends JpaRepository<ClientAccount, ClientAccountId>{

	Long countByClientId(Long client);

	ClientAccount findByClientId(Long id);
	
	//@Query("SELECT datecreation FROM ConfirmAccount WHERE clientId=:clientId")
	//Timestamp findDateByClient(@Param("clientId") Long clientId);
}	