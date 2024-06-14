package com.PixelApi.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "image")
public class Image {

	@Id
	private String name;
	private String description;
	private String category;

	////////////////////////////////////////////////////////////////

	public Image() {
		
	}
	
	public Image(String name, String description) {
		this.name = name;
		this.description = description;
	}

	public Image(String name, String description, String category) {
		this.name = name;
		this.description = description;
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}