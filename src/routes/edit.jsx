import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  useEffect(() => {
    axios.get('http://localhost:8080/hr/' + id)
      .then(res => {
        setValues({...values, 
          firstName: res.data.firstName, 
          lastName: res.data.lastName, 
          email: res.data.email,
          password: res.data.password
        })
      })
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/hr/' + id, values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='fname'>First Name:</label>
            <input type='text' name='firstName' className='form-control' placeholder='Enter First Name' 
            value={values.firstName} onChange={e => setValues({...values, firstName: e.target.value})}/>
          </div>
          <div>
            <label htmlFor='lname'>Last Name:</label>
            <input type='text' name='lastName' className='form-control' placeholder='Enter Last Name'
            value={values.lastName} onChange={e => setValues({...values, lastName: e.target.value})}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email' 
            value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' className='form-control' placeholder='Enter Password' 
            value={values.password} onChange={e => setValues({...values, password: e.target.value})}/>
          </div><br />
          <button className='btn btn-info'>Update</button>
        </form>

      </div>

    </div>
  )
}

export default Edit;