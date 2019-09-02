package com.wmt.websitetool.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Domain {

	@Id
	@GeneratedValue
	private Long id;
	
	private String domainName;
	private  Date domainRegDate;
	private Date domainEndOfActivity;
	private String  domainOwner;
	private String personForPayment;
	private String personForAdministration;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDomainName() {
		return domainName;
	}
	public void setDomainName(String domainName) {
		this.domainName = domainName;
	}
	public Date getDomainRegDate() {
		return domainRegDate;
	}
	public void setDomainRegDate(Date domainRegDate) {
		this.domainRegDate = domainRegDate;
	}
	public Date getDomainEndOfActivity() {
		return domainEndOfActivity;
	}
	public void setDomainEndOfActivity(Date domainEndOfActivity) {
		this.domainEndOfActivity = domainEndOfActivity;
	}
	public String getDomainOwner() {
		return domainOwner;
	}
	public void setDomainOwner(String domainOwner) {
		this.domainOwner = domainOwner;
	}
	public String getPersonForPayment() {
		return personForPayment;
	}
	public void setPersonForPayment(String personForPayment) {
		this.personForPayment = personForPayment;
	}
	public String getPersonForAdministration() {
		return personForAdministration;
	}
	public void setPersonForAdministration(String personForAdministration) {
		this.personForAdministration = personForAdministration;
	}
	
	
	

}
