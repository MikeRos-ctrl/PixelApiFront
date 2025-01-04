package com.PixelApi.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PixelApi.Entity.CategoryImage;
import com.PixelApi.Entity.Image;
import com.PixelApi.Entity.ImageCategoryDTO;
import com.PixelApi.Repository.CategoryImageRepo;
import com.PixelApi.Repository.ImageRepo;

@Service
public class ImageService {

	@Autowired
	ImageRepo repo;

	@Autowired
	CategoryImageRepo repo2;

	public String findNameById(String id) {
		return (repo.findById(id).get()).getName();
	}

	public List<Image> FillFront() {
		return repo.FillFront(System.currentTimeMillis());
	}

	public List<CategoryImage> getImagesByCategorie(int category) {
		return repo2.getImagesByCategorie(System.currentTimeMillis(), category);
	}

	public List<CategoryImage> getImagesByCategorie2(String imageId) {
		return repo2.getImagesByCategorie2(System.currentTimeMillis(), imageId);
	}

	public ImageCategoryDTO getRandomImageWithCategories() {
		List<Object[]> resultList = repo2.getRandomImageWithCategories(System.currentTimeMillis());

		Object[] result = resultList.get(0);

		return new ImageCategoryDTO((String) result[0], (String) result[1], (String) result[2], (String) result[3]);
	}
}