import React, { useEffect, useState } from 'react'
import HrNav from '../component/HrNav'
import HrProjectBox from '../component/HrProjectBox'
import axios from 'axios';
export default function HrPage() {
  const [hrProjects, setHrProjects] = useState([]);
  const [reloadProject, setReloadProject] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/project/')
      .then(response => {
        setHrProjects(response.data);
        console.log("fetch project successfully!");
        })
      .catch((error) => console.error('Error fetching HR projects:', error));
  }, [reloadProject]);

  const handleDelete = (id) => {
    axios.delete('http://localhost:8080/api/project/' + id)
        .then(res => {
            console.log("Project ID " + id + " deleted");
            // window.location.reload();
            setReloadProject(prev => !prev);
        })
        .catch(err => console.log(err.response.data))
}

  return (
    <div>
        <HrNav/>
        {hrProjects.map((project) => (<HrProjectBox key={project.id} project={project} handleDelete={handleDelete} />))}
    </div>
  )
}
