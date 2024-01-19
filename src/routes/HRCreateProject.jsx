import React, { useState } from "react";
import HrNav from "../component/HrNav";
import "../../StyleComponent/index.css";
import axios from "axios";
import TextAreaForm from "../component/TextAreaForm";

function HRCreateProject() {
  // State for form fields
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [projectSalary, setProjectSalary] = useState();
  const [projectPosition, setProjectPosition] = useState("");
  const [projectAmount, setProjectAmount] = useState();
  const [projectEducation, setProjectEducation] = useState("");
  const [projectImage, setProjectImage] = useState("");

  // const [HREmails, setHREmails] = useState(['']);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectDetail", projectDetail);
    formData.append("startDate", startingDate);
    formData.append("endDate", closingDate);
    formData.append("salary", projectSalary);
    formData.append("position", projectPosition);
    formData.append("amount", projectAmount);
    formData.append("educationLevel", projectEducation);
    formData.append("image", projectImage);
  
    axios.post("http://localhost:8080/api/project/", formData, config)
      .then(() => {
        console.log("New Project added");
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      });
  };
  
  const uploadImage = (files) =>{
    const imageData = new FormData();
    imageData.append("file", files[0]);
    imageData.append("upload_preset", "v964qffd");

    axios.post("https://api.cloudinary.com/v1_1/dvdqlboxo/image/upload", imageData)
    .then((res)=>{
      console.log(res);
    })
  };
  

  return (
    <div>
      <HrNav />
      <div className="vh-100">
        {" "}
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
                {/* <textarea
                  id="projectDetail"
                  className="form-control"
                  value={projectDetail}
                  style={{ height: "150px" }}
                  onChange={(e) => setProjectDetail(e.target.value)}
                  placeholder="Enter project detail"
                  maxLength={600}
                  required
                ></textarea> */}
                <TextAreaForm maxCharacters={600}/>
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
                    if (enteredValue < 0) {
                      // If negative, set the value to 0
                      setProjectSalary(0);
                    } else {
                      // If non-negative, update the state with the entered value
                      setProjectSalary(enteredValue);
                    }
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
                    if (enteredValue < 0) {
                      // If negative, set the value to 0
                      setProjectAmount(0);
                    } else {
                      // If non-negative, update the state with the entered value
                      setProjectAmount(enteredValue);
                    }
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
                  onChange={(e) => {uploadImage(e.target.files)}}
                  required={false}
                />
              </div> 

              <button
                type="submit"
                className="btn btn-warning link-light text-dark mb-3 lh-1"
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