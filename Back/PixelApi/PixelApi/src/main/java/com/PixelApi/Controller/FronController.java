package com.PixelApi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.PixelApi.Entity.PaypalOrder;
import com.PixelApi.Entity.Client;
import com.PixelApi.Service.ClientService;
import com.PixelApi.Service.ImageService;

import jakarta.validation.Valid;

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
@RequestMapping("/frontController")
public class FronController {

	@Autowired
	ImageService service;

	@Autowired
	ClientService myClientService;

	/*
	 * @GetMapping("/random") public ResponseEntity<?> getImage() {
	 * 
	 * Map<String, Object> response = new HashMap<>(); HttpStatus statusResponse =
	 * HttpStatus.OK;
	 * 
	 * try { Path imagePath = Paths.get("src/main/resources/IMG/cute-girl.jpeg");
	 * byte[] imageBytes = Files.readAllBytes(imagePath); HttpHeaders headers = new
	 * HttpHeaders(); headers.setContentType(MediaType.IMAGE_JPEG);
	 * headers.setContentLength(imageBytes.length); return new
	 * ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
	 * 
	 * } catch (IOException e) { response.put("mensaje", "Error interno");
	 * response.put("error", e.getMessage()); statusResponse =
	 * HttpStatus.INTERNAL_SERVER_ERROR; } return new ResponseEntity<>(response,
	 * statusResponse); }
	 */

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

	@PostMapping("/paypalOrder")
	public ResponseEntity<?> paypalOrder(@RequestBody PaypalOrder myOrder) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.Save(myOrder));
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

	@PostMapping("/confirmAccount/{id}/{token}")
	public ResponseEntity<?> confirmAccount(@PathVariable Long id, @PathVariable String token) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response.put("response", myClientService.ConfirmAccount(id, token));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	
	@GetMapping("/forgotPwd/{email}/{id}")
	public ResponseEntity<?> forgotPwd(@PathVariable String email, @PathVariable Long id) {

		Map<String, String> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			response = myClientService.ForgotPwd(email, id);
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
			response.put("response", myClientService.update(myClient));
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, statusResponse);
	}

	@GetMapping("/fillFront")
	public ResponseEntity<?> fillFront() throws SerialException, SQLException {

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