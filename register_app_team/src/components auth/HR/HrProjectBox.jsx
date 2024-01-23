import React from 'react'
import '../../StyleComponent/projectbox.css'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate, Link } from 'react-router-dom';

export default function HrProjectBox(props) {
  // why nned HrProjectBox?
  const project = props.project;
  const handleDelete = props.handleDelete;
  const startDate = new Date(project.startDate);
  const endDate = new Date(project.endDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  
  const formattedStartDate = startDate.toLocaleDateString('us-US', options);
  const formattedEndDate = endDate.toLocaleDateString('us-US', options);

  const alertDelete = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Cancel`,
      customClass: {
        confirmButton: 'custom-confirm-button',
        denyButton: 'custom-deny-button',
        okbutton: 'swal2-confirm'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        handleDelete(project.id);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const navigate = useNavigate();

  return (
   <div className="container d-flex justify-content-center mt-5" >
      <div className="card mb-3" style={{ minWidth: "800px"}}>
        <div className="row g-0 ">
          <div className="col-md-3" style={{ boxShadow: '5px 4px 1px orange' }}>
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" alt="" style={{ maxWidth: "250px", minWidth: "200px", width:"100%", minHeight: "140px"}}/>
          </div>
          <div className="col-md-9" >
            <div className="card-body bg-dark "id="ProjectBox" style={{ boxShadow: '4px 4px 1px orange', paddingBottom: '15px', minHeight: "140px" }}>
              <h5 className="card-title text-light">{project.projectName}</h5>
              <p className="card-text text-light">
                { project.projectDetail }
              </p>
              <div className="d-flex" style={{width: "100%"}}>
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-column align-items-start" style={{marginTop: "20px"}}>
                    <small className="text-white">{`Project Start Date: ${formattedStartDate}`}</small>
                    <small className="text-white">{`Project End Date: ${formattedEndDate}`}</small>
                  </div>
                  <div className="buttonContainer d-flex align-items-center" style={{ height: '50px', paddingRight: "10px"}}>
                    <Link className="text-decoration-none me-2" to={`/hr/user/project/${project.id}`}>
                      <button className="btn btn-warning text-dark link-light">
                        Manage Users
                      </button>
                    </Link>
                    <Link className="text-decoration-none me-2" to={`/hr/edit/project/${project.id}`}>
                      <button className="btn btn-warning text-dark link-light">
                        Edit Project
                      </button>
                    </Link>
                    <button
                      onClick={alertDelete}
                      className="btn btn-danger text-dark  link-light"
                    >
                      Delete
                    </button>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
