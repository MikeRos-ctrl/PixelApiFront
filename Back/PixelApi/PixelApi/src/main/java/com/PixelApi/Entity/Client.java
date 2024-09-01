package com.PixelApi.Entity;

import org.hibernate.validator.constraints.UniqueElements;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "client")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty(message = "contraseña no puede estar vacia")
	private String accountKey;

	@NotEmpty(message = "correo no puede estar vacio")
	@Email(message = "correo con formato no valido")
	private String email;

	private Integer role;

	private Integer accountType;

	////////////////////////////////////////////////////////////////

	public Client() {

	}

	public Client(Long id, String accountKey, String email, Integer role, Integer accountType) {
		this.id = id;
		this.accountKey = accountKey;
		this.email = email;
		this.role = role;
		this.accountType = accountType;
	}

	public Integer getAccountType() {
		return accountType;
	}

	public void setAccountType(Integer accountType) {
		this.accountType = accountType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAccountKey() {
		return accountKey;
	}

	public void setAccountKey(String accountKey) {
		this.accountKey = accountKey;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getRole() {
		return role;
	}

	public void setRole(Integer role) {
		this.role = role;
	}
}