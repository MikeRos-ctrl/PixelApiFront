package com.PixelApi.Controller;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PixelApi.Service.ClientService;
import com.PixelApi.Service.ImageService;
import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import com.google.cloud.storage.Storage.SignUrlOption;
import java.net.URL;

@RestController
@RequestMapping("/pixelapi")
public class Api {

	@Autowired
	ClientService myClientService;

	@Autowired
	ImageService service;

	@Value("${image.link}")
	private String imageLink;

	private static final String BUCKET_NAME = "pixelartimages";
	private static final String SERVICE_ACCOUNT_JSON = "src/main/resources/pixelapikey.json";

	private Storage storage;

	public Api() throws Exception {
		this.storage = StorageOptions.newBuilder()
				.setCredentials(ServiceAccountCredentials.fromStream(new FileInputStream(SERVICE_ACCOUNT_JSON))).build()
				.getService();
	}

	@GetMapping("/getOrderedImages")
	public ResponseEntity<?> getOrderedImages(@RequestParam("number") String number) {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();

		try {
			List<Object[]> myList = service.getOrderedImages(number);

			for (Object[] element : myList) {

				Map<String, Object> response = new HashMap<>();

				BlobInfo blobInfo = BlobInfo.newBuilder(BUCKET_NAME, element[0].toString()).build();
				URL signedUrl = storage.signUrl(blobInfo, 3, TimeUnit.MINUTES, SignUrlOption.withV4Signature());

				response.put("Image", signedUrl.toString());
				response.put("ImageId", element[0]);
				response.put("Name", element[1]);
				response.put("Description", element[2]);
				response.put("Categories", element[3]);
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

	@GetMapping("/getRandomImages")
	public ResponseEntity<?> getRandomImages(@RequestParam("number") String number) {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();

		try {
			List<Object[]> myList = service.getRandomImages(number);

			for (Object[] element : myList) {

				Map<String, Object> response = new HashMap<>();

				BlobInfo blobInfo = BlobInfo.newBuilder(BUCKET_NAME, element[0].toString()).build();
				URL signedUrl = storage.signUrl(blobInfo, 3, TimeUnit.MINUTES, SignUrlOption.withV4Signature());

				response.put("Image", signedUrl.toString());
				response.put("ImageId", element[0]);
				response.put("Name", element[1]);
				response.put("Description", element[2]);
				response.put("Categories", element[3]);
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
	
	@GetMapping("/getImagesById")
	public ResponseEntity<?> getImagesById(@RequestBody List<String> data) {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();

		try {
			List<Object[]> myList = service.getImagesById(data);

			for (Object[] element : myList) {

				Map<String, Object> response = new HashMap<>();

				BlobInfo blobInfo = BlobInfo.newBuilder(BUCKET_NAME, element[0].toString()).build();
				URL signedUrl = storage.signUrl(blobInfo, 3, TimeUnit.MINUTES, SignUrlOption.withV4Signature());

				response.put("Image", signedUrl.toString());
				response.put("ImageId", element[0]);
				response.put("Name", element[1]);
				response.put("Description", element[2]);
				response.put("Categories", element[3]);
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
	
	@GetMapping("/getAllImagesByCategory")
	public ResponseEntity<?> getAllImagesByCategory(@RequestParam("number") String number ,@RequestBody List<String> data) {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();

		try {
			List<Object[]> myList = service.getAllImagesByCategory(data, number);

			for (Object[] element : myList) {

				Map<String, Object> response = new HashMap<>();

				BlobInfo blobInfo = BlobInfo.newBuilder(BUCKET_NAME, element[0].toString()).build();
				URL signedUrl = storage.signUrl(blobInfo, 3, TimeUnit.MINUTES, SignUrlOption.withV4Signature());

				response.put("Image", signedUrl.toString());
				response.put("ImageId", element[0]);
				response.put("Name", element[1]);
				response.put("Description", element[2]);
				response.put("Categories", element[3]);
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

	@GetMapping("/getMatchedImagesByCategory")
	public ResponseEntity<?> getMatchedImagesByCategory(@RequestParam("number") String number ,@RequestBody List<String> data) {

		HttpStatus statusResponse = HttpStatus.OK;
		List<Map<String, Object>> myResponse = new ArrayList<>();

		try {
			List<Object[]> myList = service.getMatchedImagesByCategory(data, number);

			for (Object[] element : myList) {

				Map<String, Object> response = new HashMap<>();

				BlobInfo blobInfo = BlobInfo.newBuilder(BUCKET_NAME, element[0].toString()).build();
				URL signedUrl = storage.signUrl(blobInfo, 3, TimeUnit.MINUTES, SignUrlOption.withV4Signature());

				response.put("Image", signedUrl.toString());
				response.put("ImageId", element[0]);
				response.put("Name", element[1]);
				response.put("Description", element[2]);
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
	
	
	//GET CATEGORIES
	//PAgination	
}