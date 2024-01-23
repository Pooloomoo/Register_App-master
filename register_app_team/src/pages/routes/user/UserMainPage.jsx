import React , { useState, useEffect } from 'react'
import ProjectBox from '../../../components/projectBox'
import axios from 'axios';

export default function UserMainPage() {

  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:8080/api/project/')
      .then((response) => {
        const sortedProjects = [...response.data].sort((a, b) => {
          const dateA = new Date(a.startDate);
          const dateB = new Date(b.startDate);
          // console.log(` ${dateA} Adate, ${dateB} Bdate`);
          console.log("Fetched project data successfully!")
          return dateA - dateB;
        })
        setProjects(sortedProjects);
      })
      .catch((error) => console.error('Error fetching userProjects:', error));
      
  }, []);


  return (
    <div>
        {projects.map((project) => (
        <ProjectBox key={project.id} project={project} />
      ))}
    </div>
  )
}