package com.PixelApi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PixelApi.Entity.Image;
import com.PixelApi.Service.ImageService;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/images")
public class Images {

	@Autowired
	ImageService service;

	@GetMapping("/random")
	public ResponseEntity<?> getImage() {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			Path imagePath = Paths.get("src/main/resources/IMG/cute-girl.jpeg");
			byte[] imageBytes = Files.readAllBytes(imagePath);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			headers.setContentLength(imageBytes.length);
			return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);

		} catch (IOException e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@GetMapping("/fillFrontWthRandomImages")
	public ResponseEntity<?> fillFrontWthRandomImages() throws SerialException, SQLException {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myList = new ArrayList<>();

		try {
			List<Path> myImages = Files.walk(Paths.get("src/main/resources/IMG/")).filter(Files::isRegularFile)
					.collect(Collectors.toList());

			Set<Integer> uniqueNumbers = new HashSet<>();
			Random random = new Random();

			while (uniqueNumbers.size() < 5) {
				int randomNumber = random.nextInt(myImages.size());
				uniqueNumbers.add(randomNumber);
			}

			for (Integer element : uniqueNumbers) {

				Map<String, Object> response = new HashMap<>();
				Path imagePath = myImages.get(element);

				byte[] imageBytes = Files.readAllBytes(imagePath);
				String base64Image = Base64.getEncoder().encodeToString(imageBytes);
				response.put("Image", "data:image/jpeg;base64," + base64Image);
				response.put("Description", service.findDescriptionById(imagePath.getFileName().toString()));
				myList.add(response);
			}

			return new ResponseEntity<>(myList, HttpStatus.OK);

		} catch (IOException e) {
			Map<String, Object> response = new HashMap<>();
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			myList.add(response);
			return new ResponseEntity<>(myList, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/listByCategory/{category}")
	public ResponseEntity<?> listByCategory(@PathVariable String category) throws SerialException, SQLException {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myList = new ArrayList<>();

		try {

			List<Image> myImagesCount = service.categoryList(category);
			List<Path> routes = new ArrayList<>();

			for (int i = 0; i < myImagesCount.size(); i++) {
				routes.add(Paths.get("src/main/resources/IMG/" + myImagesCount.get(i).getName()));
			}

			Set<Integer> uniqueNumbers = new HashSet<>();
			Random random = new Random();
			
			while (uniqueNumbers.size() < 4) {
				int randomNumber = random.nextInt(routes.size());
				uniqueNumbers.add(randomNumber);
			}

			for (Integer element : uniqueNumbers) {

				Map<String, Object> response = new HashMap<>();
				Path imagePath = routes.get(element);

				byte[] imageBytes = Files.readAllBytes(imagePath);
				String base64Image = Base64.getEncoder().encodeToString(imageBytes);
				response.put("Image", "data:image/jpeg;base64," + base64Image);
				response.put("Description", service.findDescriptionById(imagePath.getFileName().toString()));

				myList.add(response);
			}

			return new ResponseEntity<>(myList, HttpStatus.OK);

		} catch (IOException e) {
			Map<String, Object> response = new HashMap<>();
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			myList.add(response);
			return new ResponseEntity<>(myList, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}