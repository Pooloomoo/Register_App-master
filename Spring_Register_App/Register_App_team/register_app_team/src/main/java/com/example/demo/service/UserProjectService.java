package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserProject;
import com.example.demo.repository.UserProjectRepository;

@Service
public class UserProjectService {
	private final UserProjectRepository userProjectRepo;
	
	@Autowired
    public UserProjectService(UserProjectRepository UserProjectRepo) {
        this.userProjectRepo = UserProjectRepo;
    }
	
	public List<UserProject> findAllUserProjects() {
		return userProjectRepo.findAll();
	}
	
	public UserProject findOneUserProject(Long id) {
		return userProjectRepo.findById(id).get();
	}
	
	public UserProject addUserProject(UserProject UserProject) {
		UserProject ret = null;
		try {
			findOneUserProject(UserProject.getId());
		} catch (NoSuchElementException e) {
			ret = userProjectRepo.save(UserProject);
		}
		return ret;
	}
	
	public UserProject updateUserProject(UserProject UserProject) {
		UserProject ret = null;
		try {
			findOneUserProject(UserProject.getId());
			ret = userProjectRepo.save(UserProject);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
			System.out.println("UserProject_ID not found!");
		}
		return ret;
	}
}
