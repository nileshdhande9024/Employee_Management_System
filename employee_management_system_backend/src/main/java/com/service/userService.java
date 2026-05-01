package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DTO.UserDto;
import com.entity.User;
import com.repository.userRepository;

@Service
public class userService {
	@Autowired
	userRepository urepo;
	
	public String register(User u) {
		User exist=urepo.findByUsername(u.getUsername());
		User empexist=urepo.findByEmpid(u.getEmpid());
		
		if(empexist!=null) {
			return "EmpID is already Exists";
		}
		else if(exist!=null) {
			return "This username is already exist.";
		}
		else {
			urepo.save(u);
			return "Registration Successfull.";
		}
	}
	
	public User login(UserDto udto) {
		User exist=urepo.findByUsername(udto.getUsername());
		if(exist==null) {
			return null;
		}
		else {
			if(exist.getConfirmpassword().equals(udto.getPassword())) {
				return exist;
			}
			else {
				return null;
			}
		}
	}
}
