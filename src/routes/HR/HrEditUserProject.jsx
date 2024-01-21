import React, { useState, useEffect } from 'react'
import HrNav from '../../components/HR/HrNav'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


export default function UserProjectEditUserProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userProject, setUserProject] = useState({
    user: {},
    project: {},
    status: {
      score: '',
      userStatus: ''
    },
  })

  useEffect(() => {
    axios.get('http://localhost:8080/api/userproject/' + id)
      .then(res => {
        setUserProject(res.data);
        console.log("Fetched userProject data successfully!");
      })
      .catch(err => console.log("Fecting userProject error: " + err))
    }, [])
    

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/userproject/' + id, userProject)
    .then(res => {
        navigate(-1)
      })
      .catch(err => console.log("put userProject error: " + err.response.data))
    }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <div className="container">
      <HrNav />
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-dark text-white p-5'>
          <form onSubmit={handleSubmit}>
            <div>
              <h2>{`EDIT UserProject ID: ${userProject.id}`}</h2>
              <h4>{`Project Name: ${userProject.project.projectName}}`}</h4>
            </div>
            <div>
              <h2>{`User ID: ${userProject.user.id}`}</h2>
              <h4>{`User Name: ${userProject.user.firstName} ${userProject.user.lastName}`}</h4>
            </div>
            <div>
              <h2>{`Status ID: ${userProject.status.id}`}</h2>
              <label htmlFor='score'>User Score:</label>
              <input type='text' name='score' className='form-control'
                placeholder='Enter User Score' value={userProject.status.score || ''}
                onChange={(e) => setUserProject({ ...userProject, status: { score: e.target.value } })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor='userStatus' className='form-label'>User Status:</label>
              <select
                id="userStatus-select" className="form-control"
                value={userProject.status.userStatus} required 
                onChange={(e) => setUserProject({ ...userProject, status: {userStatus: e.target.value} })}
              >
                <option value="">Select User Status</option>
                <option value="Apply_Success">Apply Success</option>
                <option value="Pass_The_Test">Pass The Test</option>
                <option value="Pass_The_Interview">Pass The Interview</option>
                <option value="Pass_All_Application_Process">Pass All Application Process</option>
              </select>
            </div>
            <button className='btn btn-warning'>Update</button>
            <button id="cancel-btn" className="btn btn-warning" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}