import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";

function CreateHr() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    project: {
      id: ''
    },
  })
  useEffect(() => {
    axios.get('http://localhost:8080/api/hr/')
      .then(res => {
        // setValues({
        //   ...values,
        //   id: res.data.id,
        //   firstName: res.data.firstName,
        //   lastName: res.data.lastName,
        //   email: res.data.email,
        //   password: res.data.password,
        //   project: {
        //     id: res.data.project.id
        //   }
        // })
        // console.log(values.project);
      })
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/hr/', values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err.response.data))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>CREATE HR</h1>
            <label htmlFor='id'>ID Number:</label>
            <input type='text' name='id' className='form-control' placeholder='Enter ID Number'
              onChange={e => setValues({ ...values, id: e.target.value })} />
          </div>
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
            <label htmlFor='pid'>Project ID:</label>
            <input type='number' name='pid' className='form-control' placeholder='Enter Project ID'
              onChange={e => setValues({ ...values, project: { id: e.target.value } })} />
          </div>
          <br />
          <button className='btn btn-warning'>CREATE</button>
          <Link className="btn-group text-decoration-none"  to={`/`}>
                <button id="button1" className="btn btn-warning">Cancel</button>
          </Link>
        </form>
        
      </div>

    </div>
  )
}

export default CreateHr;