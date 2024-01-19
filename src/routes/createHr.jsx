import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";

function CreateHr() {
  // navbar needed
  // const id = 0;
  const [hrs, setHrs] = useState({
    // id: id,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/hr/', hrs)
      .then(res => {
        console.log("New HR added!");
        navigate('/admin/hr');
      })
      .catch(err => console.log("post HR error: " + err.response.data))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>CREATE HR</h1>
          </div>
          <div>
            <label htmlFor='fname'>First Name:</label>
            <input type='text' name='firstName' className='form-control' placeholder='Enter First Name'
              onChange={e => setHrs({ ...hrs, firstName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='lname'>Last Name:</label>
            <input type='text' name='lastName' className='form-control' placeholder='Enter Last Name'
              onChange={e => setHrs({ ...hrs, lastName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
              onChange={e => setHrs({ ...hrs, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' className='form-control' placeholder='Enter Password'
              onChange={e => setHrs({ ...hrs, password: e.target.value })} />
          </div>
          <br />
          <button className='btn btn-warning'>CREATE</button>
          <Link className="btn-group text-decoration-none"  to={`/admin/hr`}>
                <button id="button1" className="btn btn-warning">Cancel</button>
          </Link>
        </form>
        
      </div>

    </div>
  )
}

export default CreateHr;