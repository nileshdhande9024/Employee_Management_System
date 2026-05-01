package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.UserDto;
import com.entity.User;
import com.service.userService;

@RestController
@CrossOrigin
public class userController {
	@Autowired
	userService userv;
	
	@PostMapping("/register")
	public String register(@RequestBody User u) {
		return userv.register(u);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDto dto){
		User exist=userv.login(dto);
		if(exist!=null) {
			return ResponseEntity.ok(exist);
		}
		else {
			return ResponseEntity
					.status(HttpStatus.UNAUTHORIZED)
					.body("Invalid username or password");
		}
	}
}
