package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Project;
import com.example.demo.service.ProjectService;

@RestController
@RequestMapping(path = "/project")
public class ProjectController {
	
	private final ProjectService projectService;
	
	@Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }
	
	 @GetMapping
     public List<Project> findAllProjects() {
         return projectService.findAllProjects();
     }


     @GetMapping("/{id}")
     public Project findOneProject (@PathVariable Long id){
         return projectService.findOneProject(id);
     }

     @PostMapping("/")
     public Project addProject (@RequestBody Project project){
         System.out.println(project);
         return projectService.addProject(project);
     }

     //	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
     @PutMapping("/{id}")
     public Project updateProject (@RequestBody Project project, @PathVariable Long id){
         System.out.println(project);
         return projectService.updateProject(project);
     }
}
