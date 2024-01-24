import React from 'react'
import HrNav from '../../../components/HR/HrNav'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const HrEditProject = () => {
  const { id } = useParams();
  const [project, setProject]= useState({
    projectName: "",
    projectDetail:"", 
    startDate:"",
    endDate:"",
    salary: 0.0,
    position:"",
    amount:0,
    educationLevel:"",
    projectImage:"",
  })
  const [fileSelected, setFileSelected] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/project/' + id)
      .then(res => {
        setProject(res.data);
        console.log("fetched project data successfully!");
      })
      .catch(err => console.log("fecting project error: " + err))
    }, [])
    
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  }

  const submitImage = async (files) => {
    if (files.length > 0) {
      const file = files[0];

      const data = new FormData();
      data.append("file", file);
      data.append("api_key", "468596158793514");
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dhqymz8ub");

      try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/dhqymz8ub/auto/upload", data);
        console.log(response.data.url);
        setProject((prevProject) => {
          const updatedProject = {
            ...prevProject,
            projectImage: response.data.url
          };
          console.log(updatedProject.projectImage);
          return updatedProject;
        });

        setFileSelected(true);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error("Cloudinary API Error Response:", error.response.data);
        }
      }
    }
  };
    
  const onSubmit = async (e) => {
    e.preventDefault(); 

    if (fileSelected){
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const formattedProject = {
          id: id,
          ...project,
          startDate: sentFormatDate(project.startDate),
          endDate: sentFormatDate(project.endDate),
        };

        const res = await axios.put(`http://localhost:8080/api/project/${id}`, formattedProject);
        console.log(res.data);
        console.log("Put data in process");
      } catch (err) {
        console.log(err);
      }

      navigate('/hr') ;
    }

    try {
      const formattedProject = {
        id: id,
        ...project,
        startDate: sentFormatDate(project.startDate),
        endDate: sentFormatDate(project.endDate),
      };

      const res = await axios.put(`http://localhost:8080/api/project/${id}`, formattedProject);
      console.log(res.data);
      console.log("Put data in process");
    } catch (err) {
      console.log(err);
    }

    navigate('/hr') ;
  };

  const sentFormatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
  };

  return (
    <div className="container">
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className=' p-5 flex-grow-1'
        style={{width:'80%'}}>
          <form onSubmit={onSubmit}>
            <div>
              <h1>{`EDIT PROJECT ID: ${project.id}`}</h1>
            </div>
          <div className="mb-3">
            <label htmlFor='projectName' className="form-label">Project Name:</label>
            <input type='text' name='projectName' className='form-control' placeholder='Enter Project Name' required
              value={project.projectName} onChange={e => setProject({ ...project, projectName: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="projectDetail" className="form-label">Project Detail:</label>
            <textarea
              id="projectDetail"
              className="form-control"
              placeholder="Enter Project Detail"
              value={project.projectDetail}
              style={{ height: "150px" }}
              onChange={
                (e) => {
                  const inputValue = e.target.value;
                  if (inputValue.length <= 500) setProject({ ...project, projectDetail: inputValue});
                }
              }
              maxLength={500}
              required
            ></textarea>
            <small className="form-text text-muted">
              {500 - project.projectDetail.length} characters remaining (max 500)
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date:</label>
            <input
              type="date" id="startDate" className="form-control" placeholder='Enter Start Date' required
              value={project.startDate} onChange={e => setProject({ ...project, startDate: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date:</label>
            <input
              type="date" id="endDate" className="form-control" placeholder='Enter End Date' required
              value={project.endDate} onChange={e => setProject({ ...project, endDate: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">Salary:</label>
            <input type="number" id="salary" className="form-control" placeholder='Enter Salary' required
              value={project.salary} onInput={(e) => {
                const enteredValue = e.target.value;
                // Check if the entered value is negative
                (enteredValue < 0) ? setProject({...project, salary: 0}) : setProject({ ...project, salary: e.target.value });
                }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='position' className="form-label">Position:</label>
            <input type='text' name='position' className='form-control' placeholder='Enter Position' required
              value={project.position} onChange={e => setProject({ ...project, position: e.target.value })} />
          </div>
          <div className="mb-3">
                <label htmlFor="projectAmount" className="form-label">Amount:</label>
                <input type='text' name='amount' className='form-control' placeholder='Enter Amount' required
                  value={project.amount} onInput={e => {
                  const enteredValue = e.target.value;
                  // Check if the entered value is negative
                  (enteredValue < 0) ? setProject({...project, amount: 0}) : setProject({ ...project, amount: e.target.value });
                  }}
                />
              </div>
          <div className="mb-3">
                <label htmlFor="projectEducation" className="form-label">Project Education:</label>
                <select id="projectEducation" className="form-control" value={project.educationLevel}
                  onChange={(e) => setProject({...project, educationLevel: e.target.value})}
                >
                  <option value="">Select Education</option>
                  <option value="HIGH_SCHOOL">High School</option>
                  <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
                  <option value="MASTERS_DEGREE">Master's Degree</option>
                  <option value="PHD">PhD</option>
                </select>
              </div>
              <div className="mb-3">
                      <label htmlFor="projectImage" className="form-label">
                        Project Image URL:
                      </label>
                      <input
                        type="file"
                        id="projectImage"
                        className="form-control"
                        name="projectImage"
                        onChange={(e) => {submitImage(e.target.files)}}
                        required={false} 
                        placeholder={project.projectImage} 
                        accept={".jpg, .png, .jpeg"}  
                      />
                    </div>
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