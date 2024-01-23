import React, { useState } from "react";
import HrNav from "../../../components/HR/HrNav"
import "../../../StyleComponent/index.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function HRCreateProject() {
  // State for form fields
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [projectSalary, setProjectSalary] = useState(0.0);
  const [projectPosition, setProjectPosition] = useState("");
  const [projectAmount, setProjectAmount] = useState(0);
  const [projectEducation, setProjectEducation] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = 0;
    const project = {
      // id: id,
      projectName,
      projectDetail,
      startDate: startingDate,
      endDate: closingDate,
      salary: projectSalary,
      position: projectPosition,
      amount: projectAmount,
      educationLevel: projectEducation,
      // imageURL: projectImage
    };
    axios.post("http://localhost:8080/api/project/", project, {
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("New Project added");
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      });
  };

  

  return (
    <div>
      <div className="vh-100">
        <div className="container mt-5 ">
            <h2 className="mb-4">Create Project</h2>
          <div className="createBox p-4">
            <form onSubmit={handleSubmit}>
              {/* Project Name */}
              <div className="mb-3">
                <label htmlFor="projectName" className="form-label">
                  Project Name:
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="form-control"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  required
                />
              </div>

              {/* Project Detail */}
              <div className="mb-3">
                <label htmlFor="projectDetail" className="form-label">
                  Project Detail:
                </label>
                <textarea
                  id="projectDetail"
                  className="form-control"
                  value={projectDetail}
                  style={{ height: "150px" }}
                  onChange={
                    (e) => {
                      const inputValue = e.target.value;
                      if (inputValue.length <= 500) {
                        setProjectDetail(inputValue);
                      }
                    }
                  }
                  placeholder="Enter project detail"
                  maxLength={500}
                  required
                ></textarea>
                <small className="form-text text-muted">
                  {500 - projectDetail.length} characters remaining (max 600)
                </small>
              </div>


              {/* Application Starting Date */}
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

              {/* Application Closing Date */}
              <div className="mb-3">
                <label htmlFor="closingDate" className="form-label">
                  Application Closing Date:
                </label>
                <input
                  type="date"
                  id="closingDate"
                  className="form-control"
                  // value={formatDate(startingDate)}
                  onChange={(e) => setClosingDate(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="projectSalary" className="form-label">
                  Salary:
                </label>
                <input
                  type="number"
                  id="projectSalary"
                  className="form-control"
                  value={projectSalary}
                  onInput={(e) => {
                    const enteredValue = e.target.value;
                    // Check if the entered value is negative
                    (enteredValue < 0) ? setProjectSalary(0) : setProjectSalary(enteredValue);
                    }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="projectPosition" className="form-label">
                  Position:
                </label>
                <input
                  type="text"
                  id="projectPosition"
                  className="form-control"
                  value={projectPosition}
                  placeholder="Enter position"
                  onChange={(e) => setProjectPosition(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="projectAmount" className="form-label">
                  Amount:
                </label>
                <input
                  type="number"
                  id="projectAmount"
                  className="form-control"
                  value={projectAmount}
                  onInput={(e) => {
                    const enteredValue = e.target.value;
                    // Check if the entered value is negative
                    (enteredValue < 0) ? setProjectAmount(0) : setProjectAmount(enteredValue);
                    }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="projectEducation" className="form-label">
                  Project Education:
                </label>
                <select
                  id="projectEducation"
                  className="form-control"
                  value={projectEducation}
                  onChange={(e) => setProjectEducation(e.target.value)}
                >
                  <option value="">Select Education</option>
                  <option value="HIGH_SCHOOL">High School</option>
                  <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
                  <option value="MASTERS_DEGREE">Master's Degree</option>
                  <option value="PHD">PhD</option>
                </select>
              </div>

              {/* Project Image */}
              <div className="mb-3">
                <label htmlFor="projectImage" className="form-label">
                  Project Image URL:
                </label>
                <input
                  type="file"
                  id="projectImage"
                  className="form-control"
                  onChange={(e) => setProjectImage(e.target.files[0])}
                  required={false}
                  accept={".jpg, .png, .jpeg"}
                />
              </div>

              {/* Submit Button */}
              
              <div className="d-flex justify-content-between">
                <div className="me-auto">
                  <button type="submit" className="btn btn-warning link-light text-dark d-md-block mb-3">
                    Create Project
                  </button>
                  <Link className="btn-group text-decoration-none" to={`/hr`}>
                    <button id="cancleButton" type="button" className="btn btn-warning text-dark d-md-block link-light">
                      Cancle
                    </button>
                  </Link>
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default HRCreateProject;

  // const TextAreaForm = (props) => {
  //   const maxCharacters = props.maxCharacters;
  //   const [projectDetail, setProjectDetail] = useState('');
  //   const handleProjectDetailChange = (e) => {
  //     const inputValue = e.target.value;
  //     if (inputValue.length <= maxCharacters) {
  //       setProjectDetail(inputValue);
  //     }
  //   };
    
  //   const remainingCharacters = maxCharacters - projectDetail.length;
    
  //   return (
  //     <div className="mb-3">
  //         <textarea
  //           id="projectDetail"
  //           className="form-control"
  //           value={projectDetail}
  //           style={{ height: '150px' }}
  //           onChange={handleProjectDetailChange}
  //           placeholder="Enter project detail"
  //           maxLength={maxCharacters}
  //           required
  //           ></textarea>
  //         <small className="form-text text-muted">
  //           {remainingCharacters} characters remaining (max {maxCharacters})
  //         </small>
  //       </div>
  //   );
  // };