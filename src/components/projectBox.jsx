import React from "react";
import "../../StyleComponent/index.css";
import { useState } from "react";
import ProjectDetail from "../components/user/ProjectDetail";

export default function ProjectBox(props) {
  const project = props.project;
  const [popup, setPopus] = useState(false);

  const TogglePopup=()=>{
    setPopus(!popup);
  };

  return (
    <div className="container d-flex justify-content-center mb-3" >
      <div className="card mb-3" style={{minWidth: "800px"}}>
        <div className="row g-0 ">
          <div className="col-md-3" style={{ boxShadow: '5px 4px 1px orange' }}>
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" alt="" style={{ maxWidth: "200px", minWidth: "200px" }}/>
          </div>
          <div className="col-md-9" >
            <div className="card-body bg-dark "id="ProjectBox" style={{ boxShadow: '4px 4px 1px orange', minHeight: "128px" }}>
              <h5 className="card-title text-light">{project.projectName}</h5>
              <p className="card-text text-light">
                {project.projectDetail}
              </p>
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



