import React, { useEffect, useState } from 'react'
import HrNav from '../component/HrNav'
import HrProjectBox from '../component/HrProjectBox'
import axios from 'axios';
import AddBtn from '../component/AddBtn';
export default function HrPage() {
  const [hrProjects, setHrProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/project/')
    .then((response) => {
      const sortedProjects = [...response.data].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
      
        console.log(`${dateB} Bdate, ${dateA} Adate`);
        return dateB - dateA;
      })
      setHrProjects(sortedProjects);
    })
      .catch((error) => console.error('Error fetching HR projects:', error));
  }, []);

  return (
    <div>
        <HrNav/>
        {hrProjects.map((project) => (
        <HrProjectBox key={project.id} project={project} id={project.id}/>
      ))}
    </div>
  )
}
