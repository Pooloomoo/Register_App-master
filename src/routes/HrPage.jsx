import React, { useEffect, useState } from 'react'
import HrNav from '../component/HrNav'
import HrProjectBox from '../component/HrProjectBox'
import axios from 'axios';
export default function HrPage() {
  const [hrProjects, setHrProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/project/')
      .then(response => {
        setHrProjects(response.data);
        console.log("fetch project successfully!");
        })
      .catch((error) => console.error('Error fetching HR projects:', error));
  }, []);

  return (
    <div>
        <HrNav/>
        {hrProjects.map((project) => (
        <HrProjectBox key={project.id} project={project} />
      ))}
    </div>
  )
}
