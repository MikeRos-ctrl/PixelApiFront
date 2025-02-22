package com.PixelApi.Entity;

import java.sql.Timestamp;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TOKEN")
public class Token {

	@Id
	@Column(name = "TOKEN_ID")
	private String tokenId;

	@Column(name = "CLIENT")
	private Long client;

	@Column(name = "CREATION")
	private Timestamp creation;

	@Column(name = "EXPIRATION_DATE")
	private Timestamp expirationDate;

	@Column(name = "REASON")
	private String reason;

	@Column(name = "USED")
	private Boolean used;

	public Token() {

	}

	public Token(String tokenId, Long client, Timestamp expirationDate, String reason, Boolean used) {
		this.tokenId = tokenId;
		this.client = client;
		this.expirationDate = expirationDate;
		this.reason = reason;
		this.used = used;
	}

	public String getTokenId() {
		return tokenId;
	}

	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}

	public Long getClient() {
		return client;
	}

	public void setClient(Long client) {
		this.client = client;
	}

	public Timestamp getCreation() {
		return creation;
	}

	public void setCreation(Timestamp creation) {
		this.creation = creation;
	}

	public Timestamp getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Timestamp expirationDate) {
		this.expirationDate = expirationDate;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Boolean getUsed() {
		return used;
	}

	public void setUsed(Boolean used) {
		this.used = used;
	}
}