package com.bravosolutions.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
	//get
	//URI - /hello-world
	//method - "Hello World"
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVaraible(@PathVariable String name) {
//		throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Front-end : ReactJs, Bootstrap, CSS, AXIOS, Formik, Moment \n Back-end : Java, SpringBoot, JWT Authentication, JPA, H2"));
	}
}
