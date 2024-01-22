import React, { useState } from "react";
import "../../StyleComponent/index.css";
import ProjectDetail from "./ProjectDetail";

export default function ProjectBox(props) {
  const project = props.project;

  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="container d-flex justify-content-center mb-3">
      <div className="card mb-3" style={{ minWidth: "800px" }}>
        <div className="row g-0 ">
          <div className="col-md-3" style={{ boxShadow: "5px 4px 1px orange" }}>
            <img
              src={project.projectImage || "https://res.cloudinary.com/dhqymz8ub/image/upload/v1705915848/project_psbis5.jpg"}
              alt="image"
              style={{ maxWidth: "200px",maxHeight:"200px", width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-md-9">
            <div
              className="card-body bg-dark "
              id="ProjectBox"
              style={{ boxShadow: "4px 4px 1px orange",height:'100%' }}
            >
              <h5 className="card-title text-light">{project.projectName}</h5>
              <p className="card-text text-light">{project.projectDetail}</p>
              <small className="text-secondary text-sm">Close on {project.endDate}</small>
              <button
                onClick={togglePopup}
                className="btn btn-warning text-light link-dark lh-1"
                style={{ position: "absolute", bottom: 10, right: 10 }}
              >
                Submit
              </button>
              {popup && (
                <ProjectDetail showPopup={popup} onClose={togglePopup}  project={project} />
              )}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
