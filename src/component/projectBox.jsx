import React from "react";
import "../../StyleComponent/index.css";

export default function ProjectBox() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="../assets/Sample.jpg" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body"id="ProjectBox">
              <h5 className="card-title text-light">Card title</h5>
              <p className="card-text text-light">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-warning">
                  Last updated 3 mins ago
                </small>
              </p>
              <button className="btn btn-warning text-light">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
