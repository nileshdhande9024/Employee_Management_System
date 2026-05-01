package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
//import com.entity.Leave;
import com.repository.employeeRepository;
import com.repository.leaveRepository;

@Service
public class employeeService {
	@Autowired
	employeeRepository erepo;
	leaveRepository lrepo;
	

//	public void setemp(Employee e) {
//		for(Leave l:e.getLeavelist()) {
//			l.setEmployee(e);
//		}
//	}
	
	public String addemp(Employee e) {
		erepo.save(e);
		return "Employee Record Added Successfully.";
	}
	
	public List<Employee>findallemp(){
		return erepo.findAll();
	}
	
	public Employee findbyempid(int id) {
		return erepo.findById(id) .orElse(null);
	}
	
	public String delbyempid(int id) {
		Employee exist=erepo.findById(id).orElse(null);
		if(exist==null) {
			return "No Employee Found";
		}
		else {
			erepo.deleteById(id);
			return "Employee Deleted Successfully.";
		}
	}
	public String updatebyid(int id,Employee newdata) {
		Employee exist=erepo.findById(id).orElse(null);
		if(exist==null) {
			return "No Record Found For this Employee ID";
		}
		if(newdata.getFirstname()==null&&newdata.getMiddlename()==null&&newdata.getLastname()==null
				&&newdata.getEmail()==null&&newdata.getDob()==null
				&&newdata.getContactno()==null&&newdata.getGender()==null
				&&newdata.getEducation()==null&&newdata.getAddress()==null
				&&newdata.getAdharno()==null&&newdata.getPanno()==null
				&&newdata.getProfile()==null
				&&newdata.getDesig()==null&&newdata.getDept()==null
				&&newdata.getWorklocation()==null&&newdata.getExp()==null
				&&newdata.getSalary()==null&&newdata.getReportingmanager()==null
				&&newdata.getStatus()==null&&newdata.getJoiningdate()==null) {
			return "No Value for updation.";
		}
		if(newdata.getFirstname()!=null) {
			exist.setFirstname(newdata.getFirstname());
		}
		if(newdata.getMiddlename()!=null) {
			exist.setMiddlename(newdata.getMiddlename());
		}
		if(newdata.getLastname()!=null) {
			exist.setLastname(newdata.getLastname());
		}
		if(newdata.getEmail()!=null) {
			exist.setEmail(newdata.getEmail());
		}
		if(newdata.getDob()!=null) {
			exist.setDob(newdata.getDob());
		}
		if(newdata.getContactno()!=null) {
			exist.setContactno(newdata.getContactno());
		}
		if(newdata.getGender()!=null) {
			exist.setGender(newdata.getGender());
		}
		if(newdata.getEducation()!=null) {
			exist.setEducation(newdata.getEducation());
		}
		if(newdata.getAddress()!=null) {
			exist.setAddress(newdata.getAddress());
		}
		if(newdata.getAdharno()!=null) {
			exist.setAdharno(newdata.getAdharno());
		}
		if(newdata.getPanno()!=null) {
			exist.setPanno(newdata.getPanno());
		}
		if(newdata.getProfile()!=null) {
			exist.setProfile(newdata.getProfile());
		}
		if(newdata.getDesig()!=null) {
			exist.setDesig(newdata.getDesig());
		}
		if(newdata.getDept()!=null) {
			exist.setDept(newdata.getDept());
		}
		if(newdata.getWorklocation()!=null) {
			exist.setWorklocation(newdata.getWorklocation());
		}
		if(newdata.getExp()!=null) {
			exist.setExp(newdata.getExp());
		}
		if(newdata.getSalary()!=null) {
			exist.setSalary(newdata.getSalary());
		}
		if(newdata.getReportingmanager()!=null) {
			exist.setReportingmanager(newdata.getReportingmanager());
		}
		if(newdata.getJoiningdate()!=null) {
			exist.setReportingmanager(newdata.getReportingmanager());
		}
		if(newdata.getStatus()!=null) {
			exist.setStatus(newdata.getStatus());
		}
		erepo.save(exist);
		return "Employee is Updated Successfully.";
	}
	public List<Employee>searchbyfirstname(String firstname){
		return erepo.findByFirstname(firstname);
	}
	public List<Employee>searchbylastname(String lastname){
		return erepo.findByLastname(lastname);
	}
	public List<Employee>searchbydesig(String desig){
		return erepo.findByDesig(desig);
	}
	public List<Employee>searchbydept(String dept){
		return erepo.findByDept(dept);
	}
}
