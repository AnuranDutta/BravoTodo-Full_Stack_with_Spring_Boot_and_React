package com.bravosolutions.rest.webservices.restfulwebservices.jwt;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtInMemoryAddNewUserController extends JwtInMemoryUserDetailsService {
	@RequestMapping(value = "user/add", method = RequestMethod.POST)
	public ResponseEntity<?> createNewUser(@PathVariable String username, @PathVariable String password){
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username)).findFirst();
		if(findFirst.isPresent()) {
			return (ResponseEntity<?>) ResponseEntity.badRequest();
		}
		
		String encodedPassword = new BCryptPasswordEncoder().encode(password);
		inMemoryUserList.add(new JwtUserDetails(1L, username,
				encodedPassword, "ROLE_USER_2"));
		
		return ResponseEntity.ok(null);
	}
}
