package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.Leave;

@Repository
public interface leaveRepository extends JpaRepository<Leave,Integer>{
	@Query(value="SELECT * FROM leave_application WHERE emp_ids=:empid",nativeQuery=true)
	public List<Leave>findleavesbyempid(int empid);
}
