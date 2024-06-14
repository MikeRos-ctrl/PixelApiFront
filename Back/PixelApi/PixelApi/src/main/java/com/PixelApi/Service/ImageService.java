package com.PixelApi.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PixelApi.Entity.Image;
import com.PixelApi.Repository.ImageRepo;

@Service
public class ImageService {

	@Autowired
	ImageRepo repo;

	public String findDescriptionById(String name) {
		return (repo.findById(name).get()).getDescription();
	}
	
	public List<Image> categoryList(String cetegory){
		return repo.categorieList(cetegory);
	}
}