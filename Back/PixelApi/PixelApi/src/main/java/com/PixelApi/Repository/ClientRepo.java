package com.PixelApi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.PixelApi.Entity.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {

	Client findByEmail(String email);

	Long countByEmail(String email);
}