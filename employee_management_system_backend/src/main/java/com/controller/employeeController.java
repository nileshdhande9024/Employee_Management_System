package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.employeeService;

@RestController
@CrossOrigin
public class employeeController {
	@Autowired
	employeeService eserv;
	
	@PostMapping("/addemployee")
	public String addemp(@RequestBody Employee e) {
		return eserv.addemp(e);
	}
	
	@GetMapping("/allemployee")
	public List<Employee>allemp(){
		return eserv.findallemp();
	}
	
	@GetMapping("/employeebyid")
	public Employee employeebyid(@RequestParam int id) {
		return eserv.findbyempid(id);
	}
	
	@DeleteMapping("/deletebyid")
	public String deletebyid(@RequestParam int id) {
		return eserv.delbyempid(id);
	}
	
	@PutMapping("/updatebyid")
	public String updatebyid(@RequestParam int id,
							 @RequestBody Employee e) {
		return eserv.updatebyid(id, e);
	}
	
	@GetMapping("/employeebyfirst")
	public List<Employee> employeebyfirst(@RequestParam String firstname){
		return eserv.searchbyfirstname(firstname);
	}
	
	@GetMapping("/employeebylast")
	public List<Employee> employeebylast(@RequestParam String lastname){
		return eserv.searchbylastname(lastname);
	}
	
	@GetMapping("/employeebydesig")
	public List<Employee> employeebydesig(@RequestParam String desig){
		return eserv.searchbydesig(desig);
	}
	
	@GetMapping("/employeebydept")
	public List<Employee> employeebydept(@RequestParam String dept){
		return eserv.searchbydept(dept);
	}
}
