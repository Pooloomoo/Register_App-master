import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

function CreateUser() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: 0,
    firstName: 'adsa',
    lastName: 'asdas',
    email: '',
    password: '',
    phoneNumber: 0,
    educationLevel: '',
    address: ''
  });
  const [education, setEducation] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/user/", values, {
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("New User added");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleSubmit}>
          {/* <div>
            <h1>CREATE USER</h1>
            <label htmlFor='id'>ID Number:</label>
            <input type='text' name='id' className='form-control' placeholder='Enter ID Number'
              onChange={e => setValues({ ...values, id: e.target.value })} />
          </div> */}
          <div>
            <label htmlFor='fname'>First Name:</label>
            <input type='text' name='firstName' className='form-control' placeholder='Enter First Name'
              onChange={e => setValues({ ...values, firstName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='lname'>Last Name:</label>
            <input type='text' name='lastName' className='form-control' placeholder='Enter Last Name'
              onChange={e => setValues({ ...values, lastName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
              onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' className='form-control' placeholder='Enter Password'
              onChange={e => setValues({ ...values, password: e.target.value })} />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input type='tel' name='phoneNumber' className='form-control' placeholder='Enter Phone Number'
              onChange={e => setValues({ ...values, phoneNumber: e.target.value })} />
          </div>
          {/* <div>
            <label htmlFor='education'>Education:</label>
            <input type='education' name='education' className='form-control' placeholder='Enter Education'
              onChange={e => setValues({ ...values, education: e.target.value })} />
          </div> */}
          <div className="mb-3">
            <label htmlFor="userEducation" className="form-label">
              User Education:
            </label>
            <select
              id="userEducation"
              className="form-control"
              value={values.educationLevel}
              onChange={e => setValues({ ...values, educationLevel: e.target.value })} 
            >
              <option value="">Select Education</option>
              <option value="HIGH_SCHOOL">High School</option>
              <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
              <option value="MASTERS_DEGREE">Master's Degree</option>
              <option value="PHD">PhD</option>
            </select>
          </div>
          <div>
            <label htmlFor='address'>Address:</label>
            <input type='address' name='address' className='form-control' placeholder='Enter Address'
              onChange={e => setValues({ ...values, address: e.target.value })} />
          </div><br />
          <button className='btn btn-warning'>Create</button>
          <Link className="btn-group text-decoration-none" to={`/adminUser`}>
            <button id="button1" className="btn btn-warning">Cancel</button>
          </Link>
        </form>

      </div>

    </div>
  )
}

export default CreateUser;