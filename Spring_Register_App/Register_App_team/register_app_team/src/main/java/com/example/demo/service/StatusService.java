package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Status;
import com.example.demo.repository.StatusRepository;

@Service
public class StatusService {
	
	private final StatusRepository statusRepo;
	
	@Autowired
    public StatusService(StatusRepository StatusRepo) {
        this.statusRepo = StatusRepo;
    }
	
	public List<Status> findAllStatuss() {
		return statusRepo.findAll();
	}
	
	public Status findOneStatus(Long id) {
		return statusRepo.findById(id).get();
	}
	
	public Status addStatus(Status status) {
		Status ret = null;
		try {
			findOneStatus(status.getId());
		} catch (NoSuchElementException e) {
			ret = statusRepo.save(status);
		}
		return ret;
	}
	
	public Status updateStatus(Status status) {
		Status ret = null;
		try {
			findOneStatus(status.getId());
			ret = statusRepo.save(status);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
			System.out.println("Status_ID not found!");
		}
		return ret;
	}
}
