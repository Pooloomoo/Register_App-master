import React from "react";
import "../StyleComponent/index.css";
import { useState } from "react";
import ProjectDetail from "./user/ProjectDetailPopUp"; 

export default function ProjectBox(props) {
  const project = props.project;
  const [popup, setPopus] = useState(false);
  const startDate = new Date(project.startDate);
  const endDate = new Date(project.endDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  
  const formattedStartDate = startDate.toLocaleDateString('us-US', options);
  const formattedEndDate = endDate.toLocaleDateString('us-US', options);

  const TogglePopup=()=>{
    setPopus(!popup);
  };

  return (
    <div className="container d-flex justify-content-center mb-3" >
      <div className="card mb-3" style={{minWidth: "800px"}}>
        <div className="row g-0 ">
          <div className="col-md-3" style={{ boxShadow: '5px 4px 1px orange' }}>
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" alt="" style={{width:'200px', height:'100%' }}/>
          </div>
          <div className="col-md-9" >
            <div className="card-body bg-dark "id="ProjectBox" style={{ boxShadow: '4px 4px 1px orange', minHeight: "128px" }}>
              <h5 className="card-title text-light">{project.projectName}</h5>
              <p className="card-text text-light">
                {project.projectDetail}
              </p>
              <div className="d-flex flex-column align-items-start" style={{marginTop: "20px"}}>
                    <small className="text-white">{`Project Start Date: ${formattedStartDate}`}</small>
                    <small className="text-white">{`Project End Date: ${formattedEndDate}`}</small>
                  </div>
              <button onClick={TogglePopup} className="btn btn-warning text-light link-dark lh-1" style={{ position: "absolute", bottom: 10, right: 10}}>
                Submit
              </button>
              {popup && <ProjectDetail showPopup={popup} onClose={TogglePopup} project={project}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



