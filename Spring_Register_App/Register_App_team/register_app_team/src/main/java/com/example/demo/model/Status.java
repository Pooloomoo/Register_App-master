package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "STATUS")
public class Status {

    @Id
    @Column(name = "STATUS_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "USER_PROJECT_ID")
    private Project project;

    // Constructors
    
//    public Status(Long id, Long userId, Project project) {
//    	super();
//    	this.userId = userId;
//    	this.project = project;
//    }

    // Getters and setters

    public Long getId() { return id; }


	public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }

    public void setUserId(Long userId) { this.userId = userId; }

    public Project getProject() { return project; }

    public void setProject(Project project) { this.project = project; }
}
