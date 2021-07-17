package com.bravosolutions.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {
	//get
	//URI - /hello-world
	//method - "Hello World"
	
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated");
	}
}
