package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.HR;

public interface HRRepository 
	extends JpaRepository<HR, Long> {
	
}
