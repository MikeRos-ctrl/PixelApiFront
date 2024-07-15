package com.PixelApi.Entity;

public class ClientAccountId {

	private Long clientId;
	private String token;

	public ClientAccountId() {
		
	}
	
	public ClientAccountId(Long clientId, String token) {
		this.clientId = clientId;
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}
}