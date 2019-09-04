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
	
	private String siteName;
	private  Date siteRegistredFromDate;
	private Date endOfActivityDate;
	private String  domainOwner;
	private String personForPayment;
	private String personForAdministration;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSiteName() {
		return siteName;
	}
	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}
	public Date getSiteRegistredFromDate() {
		return siteRegistredFromDate;
	}
	public void setSiteRegistredFromDate(Date siteRegistredFromDate) {
		this.siteRegistredFromDate = siteRegistredFromDate;
	}
	public Date getEndOfActivityDate() {
		return endOfActivityDate;
	}
	public void setEndOfActivityDate(Date endOfActivityDate) {
		this.endOfActivityDate = endOfActivityDate;
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
