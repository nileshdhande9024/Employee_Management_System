package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Employee;

@Repository
public interface employeeRepository extends JpaRepository<Employee,Integer>{
	
	//Derived Method for Searching Operation
	//Search by Firstname,lastname,dept,desig
	public List<Employee>findByFirstname(String firstname);
	public List<Employee>findByLastname(String lastname);
	public List<Employee>findByDept(String dept);
	public List<Employee>findByDesig(String desig);
	
	
}
