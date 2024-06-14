package com.PixelApi.Repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.PixelApi.Entity.Userprofile;

public interface ClientRepo extends JpaRepository<Userprofile, Long>{

	@Query("SELECT id FROM Userprofile WHERE username=:username")
	Long findIdByUsername(@Param("username") String username);

}