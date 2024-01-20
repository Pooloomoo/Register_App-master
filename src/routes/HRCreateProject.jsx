import React, { useState } from "react";
import HrNav from "../component/HrNav";
import "../../StyleComponent/index.css";
import axios from "axios";
import TextAreaForm from "../component/TextAreaForm";


const id = 0;

function HRCreateProject() {
  const [project, setProject] = useState({
    projectName: "",
    projectDetail: "",
    startDate: "",
    endDate: "",
    salary: undefined,
    position: "",
    amount: undefined,
    educationLevel: "",
    projectImage: "",
  });
  
  const {projectName, projectDetail,startDate,endDate,salary,position,amount,educationLevel,projectImage} = project;

  // const [HREmails, setHREmails] = useState(['']);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const projectInfo ={
      id, ...project
    };


    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

   /*  const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectDetail", projectDetail);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("salary", salary);
    formData.append("position", position);
    formData.append("amount", amount);
    formData.append("educationLevel", educationLevel);
    formData.append("image", projectImage); */
  
    axios.post("http://localhost:8080/api/project/", /* formData, */ projectInfo,config)
      .then(() => {
        console.log("New Project added");
      })
      .catch((error) => {
        console.error("Error adding project:", error);
      });
  };
  
  /* const uploadImage = (files) => {
    const imageData = new FormData();
    imageData.append("file", files[0]);
    imageData.append("upload_preset", "v964qffd");
  
    axios.post("https://api.cloudinary.com/v1_1/dvdqlboxo/image/upload", imageData)
      .then((res) => {
        console.log(res);
        // Assuming Cloudinary returns a URL, you might want to update the state with it
        setProject((prevProject) => ({
          ...prevProject,
          projectImage: res.data.secure_url,
        }));
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }; */
  

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const changeDetail = (newData) => {
    setProject((prevProject) => ({
      ...prevProject,
      projectDetail: newData,
    }));
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
                  name="projectName"
                  value={projectName}
                  onChange={onInputChange}
                  placeholder="Enter project name"
                  /* required */
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
                <TextAreaForm key={project.id}  project={project}  maxCharacters={600} changeDetail={changeDetail}/>
              </div>


              {/* Application Starting Date */}
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label">
                  Application Starting Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="form-control"
                  // value={formatDate(startDate)}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Application Closing Date */}
              <div className="mb-3">
                <label htmlFor="endDate" className="form-label">
                  Application Closing Date:
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="form-control"
                  name="endDate"
                  // value={formatDate(startDate)}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary:
                </label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  className="form-control"
                  value={salary}
                  onInput={(e) => {
                    const enteredValue = e.target.value;
                    // Check if the entered value is negative
                    if (enteredValue < 0) {
                      // If negative, set the value to 0
                      setProject((prevProject) => ({
                        ...prevProject,
                        salary: 0,
                      }));
                    } else {
                      // If non-negative, update the state with the entered value
                      setProject((prevProject) => ({
                        ...prevProject,
                        salary: enteredValue,
                      }));
                    }
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position:
                </label>
                <input
                  type="text"
                  id="position"
                  className="form-control"
                  name="position"
                  value={position}
                  placeholder="Enter position"
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="form-control"
                  value={amount}
                  onInput={(e) => {
                    const enteredValue = e.target.value;
                    // Check if the entered value is negative
                    if (enteredValue < 0) {
                      // If negative, set the value to 0
                      setProject((prevProject) => ({
                        ...prevProject,
                        amount: 0,
                      }));
                    } else {
                      // If non-negative, update the state with the entered value
                      setProject((prevProject) => ({
                        ...prevProject,
                        amount: enteredValue,
                      }));
                    }
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="educationLevel" className="form-label">
                  Project Education:
                </label>
                <select
                  id="educationLevel"
                  className="form-control"
                  name="educationLevel"
                  value={educationLevel}
                  onChange={onInputChange}
                >
                  <option value="">Select Education</option>
                  <option value="HIGH_SCHOOL">High School</option>
                  <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
                  <option value="MASTERS_DEGREE">Master's Degree</option>
                  <option value="PHD">PhD</option>
                </select>
              </div>

              {/* Project Image */}
               {/* <div className="mb-3">
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
              </div>  */}

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