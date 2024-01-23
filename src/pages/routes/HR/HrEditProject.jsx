import React from 'react'
import HrNav from '../../../components/HR/HrNav'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const HrEditProject = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState({
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
    axios.get('http://localhost:8080/api/project/' + id)
      .then(res => {
        setProjects(res.data);
        console.log("fetched project data successfully!");
      })
      .catch(err => console.log("fecting project error: " + err))
    }, [])
    
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/project/' + id, projects)
    .then(res => {
        console.log(`Project: ${id} is updated successfully!`);
        navigate(-1);
      })
      .catch(err => console.log("Put project error: " + err.response.data))
    }

  const handleCancel = () => {
    navigate(-1);
  }
    

  return (
    <div className="container">
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className=' p-5 flex-grow-1'
        style={{width:'80%'}}>
          <form onSubmit={handleSubmit}>
            <div>
              <h1>{`EDIT PROJECT ID: ${projects.id}`}</h1>
            </div>
          <div className="mb-3">
            <label htmlFor='projectName' className="form-label">Project Name:</label>
            <input type='text' name='projectName' className='form-control' placeholder='Enter Project Name' required
              value={projects.projectName} onChange={e => setProjects({ ...projects, projectName: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor='projectDetail' className="form-label">Last Name:</label>
            <input type='text' name='projectDetail' className='form-control' placeholder='Enter Project Detail' required
              value={projects.projectDetail} onChange={e => setProjects({ ...projects, projectDetail: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="projectDetail" className="form-label">Project Detail:</label>
            <textarea
              id="projectDetail"
              className="form-control"
              placeholder="Enter Project Detail"
              value={projects.projectDetail}
              style={{ height: "150px" }}
              onChange={
                (e) => {
                  const inputValue = e.target.value;
                  if (inputValue.length <= 500) setProjects({ ...projects, projectDetail: inputValue});
                }
              }
              maxLength={500}
              required
            ></textarea>
            <small className="form-text text-muted">
              {500 - projects.projectDetail.length} characters remaining (max 600)
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date:</label>
            <input
              type="date" id="startDate" className="form-control" placeholder='Enter Start Date' required
              value={projects.startDate} onChange={e => setProjects({ ...projects, startDate: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date:</label>
            <input
              type="date" id="endDate" className="form-control" placeholder='Enter End Date' required
              value={projects.endDate} onChange={e => setProjects({ ...projects, endDate: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">Salary:</label>
            <input type="number" id="salary" className="form-control" placeholder='Enter Salary' required
              value={projects.salary} onInput={(e) => {
                const enteredValue = e.target.value;
                // Check if the entered value is negative
                (enteredValue < 0) ? setProjects({...projects, salary: 0}) : setProjects({ ...projects, salary: e.target.value });
                }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='position' className="form-label">Position:</label>
            <input type='text' name='position' className='form-control' placeholder='Enter Position' required
              value={projects.position} onChange={e => setProjects({ ...projects, position: e.target.value })} />
          </div>
          <div className="mb-3">
                <label htmlFor="projectAmount" className="form-label">Amount:</label>
                <input type='text' name='amount' className='form-control' placeholder='Enter Amount' required
                  value={projects.amount} onInput={e => {
                  const enteredValue = e.target.value;
                  // Check if the entered value is negative
                  (enteredValue < 0) ? setProjects({...projects, amount: 0}) : setProjects({ ...projects, amount: e.target.value });
                  }}
                />
              </div>
          <div className="mb-3">
                <label htmlFor="projectEducation" className="form-label">Project Education:</label>
                <select id="projectEducation" className="form-control" value={projects.educationLevel}
                  onChange={(e) => setProjects({...projects, educationLevel: e.target.value})}
                >
                  <option value="">Select Education</option>
                  <option value="HIGH_SCHOOL">High School</option>
                  <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
                  <option value="MASTERS_DEGREE">Master's Degree</option>
                  <option value="PHD">PhD</option>
                </select>
              </div>
          {/* <div>
            <label htmlFor='imageURL'>Project Image:</label>
            <input type='text' name='imageURL' className='form-control' placeholder='Change The Image'
              value={projects.imageURL} onChange={e => setProjects({ ...projects, imageURL: e.target.value })} />
          </div> */}
          <br />
          <button className='btn btn-warning '>Update</button>
          <button id="cancelButton" className="btn btn-warning ms-3" onClick={(e) => { e.preventDefault(); handleCancel(); }}>
            Cancel
        </button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default HrEditProject;