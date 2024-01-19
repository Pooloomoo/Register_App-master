import React from 'react'
import '../../StyleComponent/projectBox.css'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const handleDelete = () => {
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
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

export default function HrProjectBox(props) {

  const project = props.project;

  return (
   <div className="container d-flex justify-content-center mt-5" >
      <div className="card mb-3" style={{ maxWidth: "800px"}}>
        <div className="row g-0 ">
          <div className="col-md-3" style={{ boxShadow: '5px 4px 1px orange' }}>
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" alt="" style={{ maxWidth: "200px", width:'100%', height:'100%' }}/>
          </div>
          <div className="col-md-9" >
            <div className="card-body bg-dark "id="ProjectBox" style={{ boxShadow: '4px 4px 1px orange', paddingBottom:'32px' }}>
              <h5 className="card-title text-light">{project.projectName}</h5>
              <p className="card-text text-light">
                { project.projectDetail }
              </p>
              <div className="buttonContainer">
            <button className='btn btn-warning text-dark link-light'>Edit</button>
            <button 
            onClick={handleDelete}
            className='btn btn-danger ms-2 text-dark link-light'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}