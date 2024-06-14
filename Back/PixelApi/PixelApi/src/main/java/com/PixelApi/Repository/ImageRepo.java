package com.PixelApi.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.PixelApi.Entity.Image;
import org.springframework.data.jpa.repository.Query;


public interface ImageRepo extends JpaRepository<Image, String>{

	@Query("SELECT new Image(name, description) From Image WHERE category=:category")
	List<Image> categorieList(@Param("category") String category);
	
}