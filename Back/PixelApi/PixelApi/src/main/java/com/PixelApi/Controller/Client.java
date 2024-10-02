package com.PixelApi.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.PixelApi.Security.Jwt;
//import com.PixelApi.Security.JwtUtil;
import com.PixelApi.Service.ClientService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.core.rest.PayPalRESTException;
import jakarta.validation.Valid;

/*
 * These request use HttpBasic
 */

@RestController
@RequestMapping("/client")
public class Client {

	private final Jwt myJwt;
	
	@Autowired
	public Client(Jwt jwt) {
		this.myJwt = jwt;
	}
	
	@Autowired
	ClientService myClientService;
		
/*
	
	@PutMapping("/updateAccount")
	public ResponseEntity<?> updateClient(@Valid @RequestBody Userprofile myClient, BindingResult result) {

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
			response.put("value", myClientService.update(myClient));
			response.put("mensaje", "Cliente actualizado exitosamente");
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<Map<String, Object>>(response, statusResponse);
	}*/
	
	@PostMapping("/payMembership")
	public ResponseEntity<?> payMembership(@RequestParam("username") String username){
	
		Map<String, Object> response = new HashMap<>();
		HttpStatus status = null;
		
		try {		
			//CREATE NEW TOKEN FOR USER
			 String jwt = myJwt.create(username);
			response.put("token", jwt);
			status = HttpStatus.OK;
			
		} catch (Exception e) {
			response.put("Mensaje", "Error interno");
			response.put("Error", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(response, status);
	}
	
	
	/*

	@PutMapping("/delete/{id}")
	public ResponseEntity<?> deleteClient(@PathVariable Integer id) {

		Map<String, Object> response = new HashMap<>();
		HttpStatus statusResponse = HttpStatus.OK;

		try {
			myClientService.delete(id);
			response.put("mensaje", "Cliente eliminado exitosamente");
			statusResponse = HttpStatus.OK;

		} catch (Exception e) {
			response.put("mensaje", "Error interno");
			response.put("error", e.getMessage());
			statusResponse = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<Map<String, Object>>(response, statusResponse);
	}
	*/		

/*
	
@GetMapping("/pay")
	public String successPayment() {
		try {
			Payment payment = payPalService.executePayment(paymentId, payerId);
			if (payment.getState().equals("approved")) {
				return "redirect:/success";
			}
		} catch (PayPalRESTException e) {
			e.printStackTrace();
		}
		return "redirect:/";
	}

	@PostMapping("/pay")
	public String createPayment() throws com.paypal.base.rest.PayPalRESTException {

		double amount = 100.00;
		String currency = "MXN";
		String method = "paypal";
		String intent = "sale";
		String description = "Payment description";
		String cancelUrl = "http://localhost:8080/api/payments/cancel";
		String successUrl = "http://localhost:8080/api/payments/success";

		Payment payment = payPalService.createPayment(amount, currency, method, intent, description, cancelUrl,
				successUrl);

		for (Links link : payment.getLinks()) {
			if (link.getRel().equals("approval_url")) {
				return "redirect:" + link.getHref();
			}
		}
		return "redirect:/";
	}
*/
}