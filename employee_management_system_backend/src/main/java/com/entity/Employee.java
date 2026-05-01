package com.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Employee {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	int empid;
	//Personal Info
	String firstname;
	String middlename;
	String lastname;
	String email;
	@JsonFormat(pattern = "yyyy-MM-dd")
	LocalDate dob;
	Long contactno;
	String gender;
	String education;
	String address;
	String adharno;
	String panno;
	String profile;
	
	//Work Info
	String desig;
	String dept;
	String worklocation;
	Integer exp;
	Double salary;
	String reportingmanager;
	String status;
	@JsonFormat(pattern = "yyyy-MM-dd")
	LocalDate joiningdate;
	
	@OneToMany(mappedBy="employee",cascade=CascadeType.ALL,orphanRemoval=true)
	@JsonIgnoreProperties("employee")
	List<Leave>leavelist=new ArrayList<>();
	
	//No Argument Constructor
	public Employee() {
		super();
	}
	
	public List<Leave> getLeavelist() {
		return leavelist;
	}

	public void setLeavelist(List<Leave> leavelist) {
		this.leavelist = leavelist;
	}

	//Getters and Setters
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getMiddlename() {
		return middlename;
	}
	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public Long getContactno() {
		return contactno;
	}
	public void setContactno(Long contactno) {
		this.contactno = contactno;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAdharno() {
		return adharno;
	}
	public void setAdharno(String adharno) {
		this.adharno = adharno;
	}
	public String getPanno() {
		return panno;
	}
	public void setPanno(String panno) {
		this.panno = panno;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public String getDesig() {
		return desig;
	}
	public void setDesig(String desig) {
		this.desig = desig;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getWorklocation() {
		return worklocation;
	}
	public void setWorklocation(String worklocation) {
		this.worklocation = worklocation;
	}
	public Integer getExp() {
		return exp;
	}
	public void setExp(Integer exp) {
		this.exp = exp;
	}
	public Double getSalary() {
		return salary;
	}
	public void setSalary(Double salary) {
		this.salary = salary;
	}
	public String getReportingmanager() {
		return reportingmanager;
	}
	public void setReportingmanager(String reportingmanager) {
		this.reportingmanager = reportingmanager;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDate getJoiningdate() {
		return joiningdate;
	}
	public void setJoiningdate(LocalDate joiningdate) {
		this.joiningdate = joiningdate;
	}
	
	
}
