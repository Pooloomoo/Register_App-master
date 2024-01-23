import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [hr, setHr] = useState({
    // id: id,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    axios.get('http://localhost:8080/api/hr/' + id)
      .then(res => {
        setHr(res.data);
        console.log("fetch hr successfully!");
      })
      .catch(err => console.log("fecting hr error: " + err))
    }, [])
    
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/hr/' + id, hr)
    .then(res => {
        navigate(-1)
      })
      .catch(err => console.log("put hr error: " + err.response.data))
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>{`EDIT HR ID: ${hr.id}`}</h1>
          </div>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' name='firstName' className='form-control' placeholder='Enter First Name'
              value={hr.firstName} onChange={e => setHr({ ...hr, firstName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='lastName' className='form-control' placeholder='Enter Last Name'
              value={hr.lastName} onChange={e => setHr({ ...hr, lastName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
              value={hr.email} onChange={e => setHr({ ...hr, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='text' name='password' className='form-control' placeholder='Enter Password'
              value={hr.password} onChange={e => setHr({ ...hr, password: e.target.value })} />
          </div>
          <br />
          <button className='btn btn-warning'>Update</button>
          <Link className="btn-group text-decoration-none"  to={`/admin/hr`}>
                <button id="button1" className="btn btn-warning">Cancel</button>
          </Link>
        </form>

      </div>

    </div>
  )
}

export default Edit;