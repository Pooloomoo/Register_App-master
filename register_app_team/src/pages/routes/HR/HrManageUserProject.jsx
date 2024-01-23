import React from 'react'
import HrNav from '../../../components/HR/HrNav'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import UserProjectTable from '../../../components/HR/UserProjectTable';
import ProjectDetail from '../../../components/HR/ProjectDetail';
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
  const [userProjects, setUserProjects] = useState([]);
  const [reloadUserProjects, setReloadUserProjects] = useState(false);

  // const log = (data) => {
  //   if (reloadUserProjects) {
  //     console.log("Log fecthed data: ");
  //     (data) ? setUserProjects(data) : null;
  //     console.log(userProjects);
  //   }
  //   setReloadUserProjects(true);
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/userproject/");
        const filteredUserProjects = response.data.filter(
          (userProject) => userProject.project.id === 1
        );
        setUserProjects(filteredUserProjects);
        console.log(`Fetched userproject data from projectID: ${id} successfully!`);
        // log(userProjects);
      } catch (error) {
        console.error("Error fetching userproject: ", error);
      }
    };
    fetchData(); // Call the async function
  }, [reloadUserProjects]);
  
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/project/" + id)
      .then((response) => {
        setProject(response.data);
        console.log("Fetched project data successfully!");
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  
  const handleDelete = (id) => {
    axios.delete('http://localhost:8080/api/userproject/' + id)
        .then(res => {
            console.log("UserProject ID " + id + " deleted");
            // window.location.reload();
            setReloadUserProjects(prev => !prev);
        })
        .catch(err => console.log(err.response.data))
  } 

  // const userProjectTable = (userProjects && userProjects.length > 0) ? <UserProjectTable userProjects={userProjects}/> : console.log("userProject is null in HrEditUser.jsx");

  return (
    <div>
      <HrNav />
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h1>Hr Edit User</h1>
        <Link className="btn-group text-decoration-none" to={`/hr/`}>
          <button id="button1" type="button" className="btn btn-warning text-light">Cancel</button>
        </Link>
      </div>

      <ProjectDetail project={project}/>
      {/* {userProjectTable} */}
      <UserProjectTable userProjects={userProjects} handleDelete={handleDelete}/>
    </div>
  )
}
