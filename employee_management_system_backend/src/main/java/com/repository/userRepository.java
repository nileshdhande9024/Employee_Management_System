package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.User;

@Repository
public interface userRepository extends JpaRepository<User,Integer>{
	public User findByUsername(String username);
	//registration:to check username is duplicate or not
	//login:check username name is valid or not
	
	public User findByEmpid(int empid);
}
