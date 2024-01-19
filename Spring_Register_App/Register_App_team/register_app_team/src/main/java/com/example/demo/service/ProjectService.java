package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Project;
import com.example.demo.repository.ProjectRepository;

@Service
public class ProjectService {
	private final ProjectRepository projectRepo;
	
	@Autowired
    public ProjectService(ProjectRepository ProjectRepository) {
        this.projectRepo = ProjectRepository;
    }
	
	public List<Project> findAllProjects() {
		return projectRepo.findAll();
	}
	
	public Project findOneProject(Long id) {
		return projectRepo.findById(id).get();
	}
	
	public Project addProject(Project project) {
		Project ret = null;
		try {
			findOneProject(project.getId());
		} catch (NoSuchElementException e) {
			ret = projectRepo.save(project);
		}
		return ret;
	}
	
	public Project updateProject(Project project) {
		Project ret = null;
		try {
			findOneProject(project.getId());
			ret = projectRepo.save(project);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
			System.out.println("Project_ID not found!");
		}
		return ret;
	}
}
