package com.PixelApi.Entity;

import java.util.Date;

public class Token {

	private String Token;
	private Boolean valid;
	private Integer client_id;
	private Date creation_date;
	private Date last_modification_date;

	public String getToken() {
		return Token;
	}

	public void setToken(String token) {
		Token = token;
	}

	public Boolean getValid() {
		return valid;
	}

	public void setValid(Boolean valid) {
		this.valid = valid;
	}

	public Integer getClient_id() {
		return client_id;
	}

	public void setClient_id(Integer client_id) {
		this.client_id = client_id;
	}

	public Date getCreation_date() {
		return creation_date;
	}

	public void setCreation_date(Date creation_date) {
		this.creation_date = creation_date;
	}

	public Date getLast_modification_date() {
		return last_modification_date;
	}

	public void setLast_modification_date(Date last_modification_date) {
		this.last_modification_date = last_modification_date;
	}
}