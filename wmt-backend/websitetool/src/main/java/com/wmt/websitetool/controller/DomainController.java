package com.wmt.websitetool.controller;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wmt.websitetool.model.Domain;
import com.wmt.websitetool.repository.DomainRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DomainController {
	
	@Autowired
	private DomainRepository domainRepository;
	
	@GetMapping("/website/listOfDomains")
	Collection<Domain> allDomains() {
		return domainRepository.findAll();
	}
	
	@PostMapping("/website/createDomain")
	ResponseEntity<Domain> createDomain(@RequestBody Domain domains) throws URISyntaxException, UnsupportedEncodingException {
	
		
		Domain domain = domainRepository.save(domains);
		return ResponseEntity.created(new URI("/api/createDomain" + domains.getId())).body(domain);
		
	}
	

}
