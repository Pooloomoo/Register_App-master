import React from "react";
import "../../StyleComponent/projectBox.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "../../StyleComponent/index.css";
import { NavLink } from "react-router-dom";
import axios from "../api/axios";



export default function HrProjectBox(props) {
  const project = props.project;
  const projectid = props.id;

  const handleDelete = () => {
    Swal.fire({
      title: "Do you want to delete this project?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm-button",
        denyButton: "custom-deny-button",
        okbutton: "swal2-confirm",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Send a DELETE request to your backend API endpoint
        axios.delete(`http://localhost:8080/api/project/${projectid}`)
          .then(() => {
            Swal.fire("Deleted!", "The project has been deleted.", "success")
              .then(() => {
                // Reload the page
                window.location.reload();
              });
          })
          .catch((error) => {
            console.error("Error deleting project:", error);
            Swal.fire("Error", "Failed to delete the project.", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Project not deleted", "", "info");
      }
    });
  };

  return (
    <div className="container d-flex justify-content-center mb-3">
      <div className="card mb-3" style={{ width: "800px" }}>
        <div className="row g-0">
          <div className="col-md-3 " style={{ boxShadow: "5px 4px 1px orange" }}
          >
            <img
              src={project.projectImage || "https://res.cloudinary.com/dhqymz8ub/image/upload/v1705914928/project_biztz3.jpg"}
              alt=""
              style={{ maxWidth: "200px", maxHeight:"200px" ,width: "200px", height: "200px" ,minWidth: "200px", minHeight: "145px"}}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body bg-dark"
            style={{ boxShadow: "4px 4px 1px orange",height:'100%' }}>
              <h5 className="card-title text-light">{project.projectName}</h5>
              <p className="card-text text-light">{project.projectDetail}</p>
              <small className="text-sm text-secondary">end on {project.endDate}</small>
              <div className="buttonContainer">
                <NavLink
                to={`/hreditproject/${projectid}`}>
                <button className="btn btn-warning text-dark link-light">
                  Edit
                </button>
                </NavLink>
                <button
                  onClick={handleDelete}
                  className="btn btn-danger ms-2 text-dark link-light"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
