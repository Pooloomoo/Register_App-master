package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	private final UserRepository userRepo;
	
	@Autowired
    public UserService(UserRepository userRepository) {
        this.userRepo = userRepository;
    }
	
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}
	
	public User findOneUser(Long id) {
		return userRepo.findById(id).get();
	}
	
	public User addUser(User user) {
		User ret = null;
		try {
			findOneUser(user.getId());
		} catch (NoSuchElementException e) {
			ret = userRepo.save(user);
		}
		return ret;
	}
	
	public User updateUser(User user) {
		User ret = null;
		try {
			findOneUser(user.getId());
			ret = userRepo.save(user);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
			System.out.println("User_ID not found!");
		}
		return ret;
	}
	
	
}
