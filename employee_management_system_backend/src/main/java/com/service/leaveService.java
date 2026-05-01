package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Leave;
import com.repository.employeeRepository;
import com.repository.leaveRepository;

@Service
public class leaveService {
	@Autowired
	leaveRepository lrepo;
	employeeRepository erepo;
	
	public String applyforleave(Leave l) {
		l.setStatus("PENDING");
		lrepo.save(l);
		return "Applied for leave Successfully";
	}
	
	public List<Leave>findallleaves(){
		return lrepo.findAll();
	}
	
	public String cancelLeave(int leaveid) {
		Leave exist=lrepo.findById(leaveid).orElse(null);
		if(exist!=null) {
			lrepo.deleteById(leaveid);
			return"Leave Cancelled";
		}
		else {
			return"No Matching Record.";
		}
	}
	
	public String updateleavebyid(int leaveid,Leave newdata) {
		Leave exist=lrepo.findById(leaveid).orElse(null);
		
		if(exist==null) {
			return "No matching record found.";
		}
		if(newdata.getReason()==null&&newdata.getFromdate()==null&&newdata.getTodate()==null) {
			return "No New data is provided.";
		}
		
		if(newdata.getReason()!=null) {
			exist.setReason(newdata.getReason());
		}
		if(newdata.getTodate()!=null) {
			exist.setTodate(newdata.getTodate());
		}
		if(newdata.getFromdate()!=null) {
			exist.setFromdate(newdata.getFromdate());
		}
		
		lrepo.save(exist);
		return "Leave Updated";
	}
	public String updateleavesstatus(int leaveid,String action) {
		Leave exist=lrepo.findById(leaveid).orElse(null);
		if(exist!=null) {
			exist.setStatus(action);
			lrepo.save(exist);
			return "Leave Status Updated";
		}
		else {
			return "No Matching record found for given leaveid";
		}
	}
	
	public List<Leave>findleavesbyempid(int empid){
		return lrepo.findleavesbyempid(empid);
	}
}
