package com.example.demo.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PROJECT")
public class Project {

    @Id
    @Column(name = "PROJECT_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "PROJECT_NAME")
    private String projectName;

    @Column(name = "PROJECT_DETAIL", columnDefinition = "TEXT")
    private String projectDetail;

    @Column(name = "START_DATE")
    private LocalDate startDate;

    @Column(name = "END_DATE")
    private LocalDate endDate;

    @Column(name = "SALARY")
    private Double salary;

    @Column(name = "POSITION")
    private String position;

    @Column(name = "AMOUNT")
    private Integer amount;

    @Enumerated(EnumType.STRING)
    @Column(name = "EDUCATION")
    private EducationLevel educationLevel;

    // Constructors
    
//    public Project(String projectName, String projectDetail, LocalDate startDate, LocalDate endDate, Double salary,
//    		String position, Integer amount, EducationLevel educationLevel) {
//    	super();
//    	this.projectName = projectName;
//    	this.projectDetail = projectDetail;
//    	this.startDate = startDate;
//    	this.endDate = endDate;
//    	this.salary = salary;
//    	this.position = position;
//    	this.amount = amount;
//    	this.educationLevel = educationLevel;
//    }

    // Getters and setters

    public Long getId() { return id; }


	public void setId(Long id) { this.id = id; }

    public String getProjectName() { return projectName; }

    public void setProjectName(String projectName) { this.projectName = projectName; }

    public String getProjectDetail() { return projectDetail; }

    public void setProjectDetail(String projectDetail) { this.projectDetail = projectDetail; }

    public LocalDate getStartDate() { return startDate; }

    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }

    public LocalDate getEndDate() { return endDate; }

    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }

    public Double getSalary() { return salary; }

    public void setSalary(Double salary) { this.salary = salary; }

    public String getPosition() { return position; }

    public void setPosition(String position) { this.position = position; }

    public Integer getAmount() { return amount; }

    public void setAmount(Integer amount) { this.amount = amount; }

    public EducationLevel getEducationLevel() { return educationLevel; }

    public void setEducationLevel(EducationLevel educationLevel) {
        this.educationLevel = educationLevel; 
    }

    public enum EducationLevel {
        HIGH_SCHOOL,
        BACHELORS_DEGREE,
        MASTERS_DEGREE,
        PHD
    }
}
