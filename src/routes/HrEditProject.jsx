import React from 'react'
import HrNav from '../component/HrNav'
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

  return (
    <div className="container">
      <HrNav />
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-dark text-white p-5 flex-grow-1'>
          <form onSubmit={handleSubmit}>
            <div>
              <h1>{`EDIT PROJECT ID: ${projects.id}`}</h1>
            </div>
          <div className="mb-3">
            <label htmlFor='projectName' className="form-label">Project Name:</label>
            <input type='text' name='projectName' className='form-control' placeholder='Enter Project Name'
              value={projects.projectName} onChange={e => setProjects({ ...projects, projectName: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor='projectDetail' className="form-label">Last Name:</label>
            <input type='text' name='projectDetail' className='form-control' placeholder='Enter Project Detail'
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
                      if (inputValue.length <= 600) setProjects({ ...projects, projectDetail: inputValue});
                    }
                  }
                  maxLength={600}
                  required
                ></textarea>
                <small className="form-text text-muted">
                  {600 - projects.projectDetail.length} characters remaining (max 600)
                </small>
              </div>
          <div className="mb-3">
            <label htmlFor='startDate' className="form-label">Start Date:</label>
            <input type='startDate' name='startDate' className='form-control' placeholder='Enter Start Date'
              value={projects.startDate} onChange={e => setProjects({ ...projects, startDate: e.target.value })} />
          </div>
          <div className="mb-3">
                <label htmlFor="startingDate" className="form-label">
                  Application Starting Date:
                </label>
                <input
                  type="date"
                  id="startingDate"
                  className="form-control"
                  // value={formatDate(startingDate)}
                  onChange={(e) => setStartingDate(e.target.value)}
                  required
                />
              </div>
          <div className="mb-3">
            <label htmlFor='endDate' className="form-label">End Date:</label>
            <input type='text' name='endDate' className='form-control' placeholder='Enter End Date'
              value={projects.endDate} onChange={e => setProjects({ ...projects, endDate: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor='salary' className="form-label">Salary:</label>
            <input type='text' name='salary' className='form-control' placeholder='Enter Salary'
              value={projects.salary} onChange={e => setProjects({ ...projects, salary: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor='position' className="form-label">Position:</label>
            <input type='text' name='position' className='form-control' placeholder='Enter Position'
              value={projects.position} onChange={e => setProjects({ ...projects, position: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor='amount' className="form-label">Amount:</label>
            <input type='text' name='amount' className='form-control' placeholder='Enter Amount'
              value={projects.amount} onChange={e => setProjects({ ...projects, amount: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor='educationLevel' className="form-label">Education:</label>
            <input type='text' name='educationLevel' className='form-control' placeholder='Enter Education'
              value={projects.educationLevel} onChange={e => setProjects({ ...projects, educationLevel: e.target.value })} />
          </div>
          {/* <div>
            <label htmlFor='imageURL'>Project Image:</label>
            <input type='text' name='imageURL' className='form-control' placeholder='Change The Image'
              value={projects.imageURL} onChange={e => setProjects({ ...projects, imageURL: e.target.value })} />
          </div> */}
          <br />
          <button className='btn btn-warning'>Update</button>
          <Link className="btn-group text-decoration-none"  to={`/hr`}>
            <button id="cancleButton" className="btn btn-warning">Cancel</button>
          </Link>
        </form>

      </div>
    </div>
  </div>
  )
}

export default HrEditProject;