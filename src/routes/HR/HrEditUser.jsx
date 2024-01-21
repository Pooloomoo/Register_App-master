import React from 'react'
import HrNav from '../../components/HR/HrNav'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import UserProjectTable from '../../components/UserProjectTable';
import ProjectDetail from '../../components/HR/ProjectDetail';
import axios from 'axios';

export default function HrEditUser() {
  const { id } = useParams();
  const [project, setProject] = useState({
    projectName: '',
    projectDetail: '',
    startDate: '',
    endDate: '',
    salary: 0,
    position: '',
    amount: 0,
    educationLevel: '',
    // imageURL: projectImage
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/project/" + id)
      .then((response) => {
        setProject(response.data);
        console.log("Fetched project data successfully!");
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <HrNav />
      <h1>Hr Edit User</h1>
      <ProjectDetail project={project}/>
      <UserProjectTable />
    </div>
  )
}
