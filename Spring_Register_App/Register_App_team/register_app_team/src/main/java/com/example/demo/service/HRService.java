package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.HR;
import com.example.demo.repository.HRRepository;

@Service
public class HRService {
	
	private final HRRepository HRRepo;
		
	@Autowired
    public HRService(HRRepository HRRepository) {
        this.HRRepo = HRRepository;
    }
	
	public List<HR> findAllHRs() {
		return HRRepo.findAll();
	}
	
	public HR findOneHR(Long id) {
		return HRRepo.findById(id).get();
	}
	
	public HR addHR(HR hr) {
		HR ret = null;
		try {
			findOneHR(hr.getId());
		} catch (NoSuchElementException e) {
			ret = HRRepo.save(hr);
		}
		return ret;
	}
	
	public HR updateHR(HR hr) {
		HR ret = null;
		try {
			findOneHR(hr.getId());
			ret = HRRepo.save(hr);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
			System.out.println("HR_ID not found!");
		}
		return ret;
	}
	
}
