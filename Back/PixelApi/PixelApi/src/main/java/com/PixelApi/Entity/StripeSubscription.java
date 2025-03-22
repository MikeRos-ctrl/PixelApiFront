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
	private Integer planTypeId;
	
	@Column(name = "START_DAY")
	private Timestamp startDay;
	
	@Column(name = "END_DAY")
	private Timestamp endDay;
	
	@Column(name = "ACTIVE")
	private Boolean active;
	
	@Column(name = "ACTIVE_MONTHS")
	private Integer activeMonths;
	
	@Column(name = "TOKEN")
	private String token;

	public StripeSubscription() {
		
	}
	
	public StripeSubscription(String stripeSubscriptionId, Long clientId, Integer planTypeId,
			 Boolean active, Integer activeMonths, Timestamp startDay, Timestamp endDay, String token) {
		this.stripeSubscriptionId = stripeSubscriptionId;
		this.clientId = clientId;
		this.planTypeId = planTypeId;
		this.active = active;
		this.activeMonths = activeMonths;
		this.startDay = startDay;
		this.endDay = endDay;
		this.token = token;
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

	public Integer getPlanTypeId() {
		return planTypeId;
	}

	public void setPlanTypeId(Integer planTypeId) {
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

	public Timestamp getEndDay() {
		return endDay;
	}

	public void setEndDay(Timestamp endDay) {
		this.endDay = endDay;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}