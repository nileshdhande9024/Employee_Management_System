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

import com.entity.Leave;
import com.service.leaveService;

@RestController
@CrossOrigin
public class leaveController {
	@Autowired
	leaveService lserv;
	
	@PostMapping("/applyforleave")
	public String applyforleave(@RequestBody Leave l) {
		return lserv.applyforleave(l);
	}
	
	@GetMapping("/findallleaves")
	public List<Leave>findallleaves(){
		return lserv.findallleaves();
	}
	
	@DeleteMapping("/cancelleavesbyid")
	public String deleteleavesbyid(@RequestParam int leaveid) {
		return lserv.cancelLeave(leaveid);
	}
	
	@PutMapping("/updateleavesbyid")
	public String updateleavebyid(@RequestParam int leaveid,@RequestBody Leave l) {
		return lserv.updateleavebyid(leaveid, l);
	}
	
	@PutMapping("/updatestatus")
	public String updatestatus(@RequestParam int leaveid,@RequestParam String action) {
		return lserv.updateleavesstatus(leaveid, action);
	}
	
	@GetMapping("/findleavesbyempid")
	public List<Leave> findleavesbyempid(@RequestParam int empid){
		return lserv.findleavesbyempid(empid);
	}
}
