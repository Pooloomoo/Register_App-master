import React from "react";
import "../../StyleComponent/index.css";
import { useState } from "react";
import ProjectDetail from "./Projectdetail";

export default function ProjectBox() {
  const [popup, setPopus] = useState(false);

  const TogglePopup=()=>{
    setPopus(!popup);
  }
  

  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" alt="" style={{ maxWidth: "200px" }}/>
          </div>
          <div className="col-md-9">
            <div className="card-body"id="ProjectBox">
              <h5 className="card-title text-light">Lorem</h5>
              <p className="card-text text-light">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. 
              </p>
              <button onClick={TogglePopup} className="btn btn-warning text-light" style={{ position: "absolute", bottom: 10, right: 10}}>
                Submit
              </button>
              {popup && <ProjectDetail showPopup={popup} onClose={TogglePopup}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



