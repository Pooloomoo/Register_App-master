import React , { useState, useEffect } from 'react'
import ProjectBox from '../component/projectBox'
import NavBar from '../component/NavBar';
import axios from 'axios';

export default function UserMainPage() {

  const [projects, setProjects] = useState([]); 
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/project/')
      .then((response) => setProjects(response.data))
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