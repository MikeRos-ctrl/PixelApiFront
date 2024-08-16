package com.PixelApi.Entity;

public class PaypalOrder {

	private String orderID;  
	private String payerID;  
	private String paymentID; 
	private String status;
	private String payerName;
	private Double amount;

	public PaypalOrder() {

	}


	public String getOrderID() {
		return orderID;
	}


	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}


	public String getPayerID() {
		return payerID;
	}


	public void setPayerID(String payerID) {
		this.payerID = payerID;
	}


	public String getPaymentID() {
		return paymentID;
	}


	public void setPaymentID(String paymentID) {
		this.paymentID = paymentID;
	}


	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPayerName() {
		return payerName;
	}

	public void setPayerName(String payerName) {
		this.payerName = payerName;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}
	

	public String toString() {
	    return "PaypalOrder{" +
	           "orderID=" + orderID +
	           ", payerID=" + payerID +
	           ", paymentID=" + paymentID +
	           ", status='" + status + '\'' +
	           ", payerName='" + payerName + '\'' +
	           ", amount=" + amount +
	           '}';
	}
}