import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetail(props) {
  const project = props.project;

  return (
    <div className="card mb-4 border-0 bg-dark">
      <div className="card-body mb-4 border-0">
        <h3 className="card-title display-4 font-weight-bold text-white">Project Name: {project.projectName}</h3>
        {/* <h3 className="card-title display-4">{project.projectName}</h3> */}
        <h3 className="card-subtitle mb-3 text-white">Project Detail:</h3>
        <p className="card-text lead text-white">{project.projectDetail}</p>
  
        <table className="table table-secondary table-bordered table-responsive text-light mt-4 bg-dark">
          <tbody>
            <tr>
              <th className="col-md-4">Position:</th>
              <td>{project.position}</td>
            </tr>
            <tr>
              <th>Salary:</th>
              <td>{project.salary}</td>
            </tr>
            <tr>
              <th>Amount:</th>
              <td>{project.amount}</td>
            </tr>
            <tr>
              <th>Education:</th>
              <td>{project.educationLevel}</td>
            </tr>
            <tr>
              <th>Application Starting Date:</th>
              <td>{project.startDate}</td>
            </tr>
            <tr>
              <th>Application Closing Date:</th>
              <td>{project.endDate}</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-group text-decoration-none">
          <Link to={`/hr/edit/project/${project.id}`}>
            <button id="editProject" type="button" className="btn btn-warning text-light">Edit Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}  
