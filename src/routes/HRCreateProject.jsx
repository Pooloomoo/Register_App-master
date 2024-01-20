import React, { useState } from "react";
import HrNav from "../component/HrNav";
import "../../StyleComponent/index.css";
import axios from "axios";

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

  
  const TextAreaForm = (props) => {
    const maxCharacters = props.maxCharacters;
    const [projectDetail, setProjectDetail] = useState('');
    const handleProjectDetailChange = (e) => {
      const inputValue = e.target.value;
      if (inputValue.length <= maxCharacters) {
        setProjectDetail(inputValue);
      }
    };
    
    const remainingCharacters = maxCharacters - projectDetail.length;
    
    return (
      <div className="mb-3">
          <textarea
            id="projectDetail"
            className="form-control"
            value={projectDetail}
            style={{ height: '150px' }}
            onChange={handleProjectDetailChange}
            placeholder="Enter project detail"
            maxLength={maxCharacters}
            required
            ></textarea>
          <small className="form-text text-muted">
            {remainingCharacters} characters remaining (max {maxCharacters})
          </small>
        </div>
    );
  };


  // const [HREmails, setHREmails] = useState(['']);
  
  // Function to handle form submission
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
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      });
  };

  

  return (
    <div>
      <HrNav />
      <div className="vh-100">
        {/* Add custom class for background color */}
        <div className="container mt-5">
          <div className="createBox p-4">
            <h2 className="mb-4">Create Project</h2>
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
                      if (inputValue.length <= 600) {
                        setProjectDetail(inputValue);
                      }
                    }
                  }
                  placeholder="Enter project detail"
                  maxLength={600}
                  required
                ></textarea>
                <small className="form-text text-muted">
                  {600 - projectDetail.length} characters remaining (max 600)
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
              <button
                type="submit"
                className="btn btn-warning link-light text-dark"
              >
                Create Project
              </button>
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

{
  /* HR Email List
  <div className="mb-3">
  <label htmlFor="HREmailList" className="form-label">HR permissions email list:</label>
  {HREmails.map((email, index) => (
    <div key={index} className="mb-2">
    <input
        type="text"
        id={`HREmailList${index}`}
        className="form-control"
        value={email}
        onChange={(e) => handleHREmailChange(index, e.target.value)}
        placeholder={(index == 0) ? `Enter your email` : `Enter other HR email`}
        required
        />
        </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addHREmailInput}>Add Email</button>
      </div> */
}

// const handleHREmailChange = (index, value) => {
//   const newEmails = [...HREmails];
//   newEmails[index] = value;
//   setHREmails(newEmails);
// };

// Function to add a new email input
// const addHREmailInput = () => {
//   setHREmails([...HREmails, '']);
// };

// function formatDate(date) {
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// }
