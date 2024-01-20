import React, { useEffect, useState } from "react";
import HrNav from "../../components/HR/HrNav";
import HrProjectBox from "../../components/HR/HrProjectBox";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HrPage() {
  const [hrProjects, setHrProjects] = useState([]);
  const [reloadProject, setReloadProject] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/project/")
      .then((response) => {
        setHrProjects(response.data);
        console.log("Fetched project data successfully!");
      })
      .catch((error) => console.error("Error fetching HR projects:", error));
  }, [reloadProject]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/api/project/" + id)
      .then((res) => {
        console.log("Project ID " + id + " deleted");
        // window.location.reload();ss
        setReloadProject((prev) => !prev);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <HrNav />
      <div className="d-flex justify-content-between">
        <div className="ms-auto">
          <Link className="btn-group text-decoration-none" to={`/hr/create/project/`}>
            <button
              id="button1"
              type="button"
              className="btn btn-warning text-dark d-md-block link-light"
            >
              Create
            </button>
          </Link>
        </div>
      </div>
      {hrProjects.map((project) => (
        <HrProjectBox
          key={project.id}
          project={project}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
