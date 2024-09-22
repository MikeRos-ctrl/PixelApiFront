package com.PixelApi.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "paypalorder")
public class PaypalOrder {

	@Id
	private String orderId;
	private String suscriptionId;
	private Long clientId;
	private String plan;

	public PaypalOrder() {

	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getSuscriptionId() {
		return suscriptionId;
	}

	public void setSuscriptionId(String suscriptionId) {
		this.suscriptionId = suscriptionId;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	public String getPlan() {
		return plan;
	}

	public void setPlan(String plan) {
		this.plan = plan;
	}
}