package com.PixelApi.Entity;

import java.sql.Date;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "STRIPE_SUBSCRIPTION")
public class StripeSubscription {

	@Id
	@Column(name = "STRIPE_SUBSCRIPTION_ID") 
	private String stripeSubscriptionId;
	
	@Column(name = "CLIENT_ID")
	private Long clientId;
	
	@Column(name = "PLAN_TYPE")
	private String planTypeId;
	
	@Column(name = "START_DAY")
	private Timestamp startDay;
	
	@Column(name = "ACTIVE")
	private Boolean active;
	
	@Column(name = "ACTIVE_MONTHS")
	private Integer activeMonths;

	public StripeSubscription() {
		
	}
	
	public StripeSubscription(String stripeSubscriptionId, Long clientId, String planTypeId,
			Boolean active, Integer activeMonths) {
		this.stripeSubscriptionId = stripeSubscriptionId;
		this.clientId = clientId;
		this.planTypeId = planTypeId;
		this.startDay = startDay;
		this.active = active;
		this.activeMonths = activeMonths;
	}
	
	public String getStripeSubscriptionId() {
		return stripeSubscriptionId;
	}

	public void setStripeSubscriptionId(String stripeSubscriptionId) {
		this.stripeSubscriptionId = stripeSubscriptionId;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	public String getPlanTypeId() {
		return planTypeId;
	}

	public void setPlanTypeId(String planTypeId) {
		this.planTypeId = planTypeId;
	}

	public Timestamp getStartDay() {
		return startDay;
	}

	public void setStartDay(Timestamp startDay) {
		this.startDay = startDay;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Integer getActiveMonths() {
		return activeMonths;
	}

	public void setActiveMonths(Integer activeMonths) {
		this.activeMonths = activeMonths;
	}
}