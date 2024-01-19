import React, { useEffect, useState } from 'react'
import HrNav from '../component/HrNav'
import HrProjectBox from '../component/HrProjectBox'
import axios from 'axios';
export default function HrPage() {
  const [hrProjects, setHrProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8200/project/')
      .then((response) => setHrProjects(response.data))
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