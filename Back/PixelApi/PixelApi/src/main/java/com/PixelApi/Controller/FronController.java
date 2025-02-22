package com.PixelApi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PixelApi.Entity.Image;
import com.PixelApi.Entity.ImageCategoryDTO;
import com.PixelApi.Entity.StripeSubscriptionDto;
import com.PixelApi.Entity.CategoryImage;
import com.PixelApi.Entity.Client;
import com.PixelApi.Service.ClientService;
import com.PixelApi.Service.ImageService;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

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

@Slf4j
@RestController
@RequestMapping("/frontController")
public class FronController {

	@Autowired
	ImageService service;

	@Autowired
	ClientService myClientService;

	@Value("${image.link}")
	private String imageLink;

	@GetMapping("/stripeCredentials")
	public ResponseEntity<?> StripeCredentials(@RequestParam("plan") String plan) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.StripeCredentials(plan));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@PostMapping("/stripeSubscription")
	public ResponseEntity<?> CreateStripeSubscription(@RequestBody StripeSubscriptionDto data) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.CreateStripeSubscription(data));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@GetMapping("/validateAccount/{email}")
	public ResponseEntity<?> validateAccount(@PathVariable String email) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.ValidateAccount(email));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@PostMapping("/createAccount")
	public ResponseEntity<?> createAccount(@Valid @RequestBody Client myClient, BindingResult result) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		if (result.hasErrors()) {
			List<String> errors = new ArrayList<String>();

			for (FieldError err : result.getFieldErrors()) {
				errors.add("Campo '" + err.getField() + "' " + err.getDefaultMessage());
			}

			response.put("errors", errors);
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}

		try {
			response.put("value", myClientService.Save(myClient));
			response.put("mensaje", "Usuario creado exitosamente");
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@PostMapping("/confirmAccount/{token}")
	public ResponseEntity<?> confirmAccount(@PathVariable String token) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.ConfirmAccount(token));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@GetMapping("/forgotPwd/{email}")
	public ResponseEntity<?> forgotPwd(@PathVariable String email) {

		Map<String, String> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response = myClientService.ForgotPwd(email);
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@GetMapping("/login/{email}/{accountKey}")
	public ResponseEntity<?> login(@PathVariable String email, @PathVariable String accountKey) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {

			Client myClient = myClientService.Login(email, accountKey);

			if (myClient != null) {
				response.put("response", myClient);
				statusResponse = HttpStatus.OK;
			} else {
				response.put("response", "Not found");
				statusResponse = HttpStatus.NOT_FOUND;
			}

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@PutMapping("/updateAccount")
	public ResponseEntity<?> updateAccount(@RequestBody Client myClient) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.Update(myClient));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@GetMapping("/getRandomImageWithCategories")
	public ResponseEntity<?> GetRandomImageWithCategories() {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();
		
		try {
			ImageCategoryDTO myImage = service.getRandomImageWithCategories();	
			Map<String, Object> formatedDto = Map.of(
					"Image", imageLink + myImage.getImageId(),
					"Name", myImage.getName(),
					"ImageId", myImage.getImageId(),
					"Categories", myImage.getCategoryNames(),
					"Description", myImage.getDescription()
					);
			myResponse.add(formatedDto);
			return new ResponseEntity<>(myResponse, HttpStatus.OK);
			
		} catch (Exception e) {
			Map<String, Object> response = new HashMap<>();
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			myResponse.add(response);
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(myResponse, statusResponse);
	}

	@GetMapping("/fillFrontHeader")
	public ResponseEntity<?> fillFrontHeader() {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();

		try {
			List<Image> myList = service.FillFront();

			for (Image element : myList) {

				Map<String, Object> response = new HashMap<>();
				response.put("Image", imageLink + element.getImageId());
				response.put("Name", element.getName());
				response.put("ImageId", element.getImageId());
				myResponse.add(response);
			}

			return new ResponseEntity<>(myResponse, HttpStatus.OK);

		} catch (Exception e) {
			Map<String, Object> response = new HashMap<>();
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			myResponse.add(response);
			return new ResponseEntity<>(myResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/listByCategory/{category}/{imageId}")
	public ResponseEntity<?> listByCategory(
			@PathVariable int category,
			@PathVariable String imageId) {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myList = new ArrayList<>();

		try {

			List<CategoryImage> myImages = (category == 8) ? myImages = service.getImagesByCategory2(imageId)
					: service.getImagesByCategory(category, imageId);

			for (CategoryImage element : myImages) {
				Map<String, Object> response = new HashMap<>();
				response.put("Image", imageLink + element.getImageId());
				response.put("Name", service.findNameById(element.getImageId()));
				myList.add(response);
			}

			return new ResponseEntity<>(myList, HttpStatus.OK);

		} catch (Exception e) {
			Map<String, Object> response = new HashMap<>();
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			myList.add(response);
			return new ResponseEntity<>(myList, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}