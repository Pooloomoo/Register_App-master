import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    fName: '',
    lName: '',
    email: '',
    password: '',
    phone: '',
    education: '',
    address: ''
  })
  useEffect(() => {
    axios.get('http://localhost:8080/user/' + id)
      .then(res => {
        setValues({
          ...values,
          id: res.data.id,
          fName: res.data.fName,
          lName: res.data.lName,
          email: res.data.email,
          password: res.data.password,
          phone: res.data.phone,
          education: res.data.education,
          address: res.data.address
        })
      })
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/user/' + id, values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err.response.data))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='id'>ID Number:</label>
            <input type='text' name='id' className='form-control' placeholder='Enter ID Number'
              value={values.id} onChange={e => setValues({ ...values, id: e.target.value })} />
          </div>
          <div>
            <label htmlFor='fname'>First Name:</label>
            <input type='text' name='fName' className='form-control' placeholder='Enter First Name'
              value={values.fName} onChange={e => setValues({ ...values, fName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='lname'>Last Name:</label>
            <input type='text' name='lName' className='form-control' placeholder='Enter Last Name'
              value={values.lName} onChange={e => setValues({ ...values, lName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
              value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' className='form-control' placeholder='Enter Password'
              value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input type='phone' name='phone' className='form-control' placeholder='Enter Password'
              value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>
          <div>
            <label htmlFor='education'>Password:</label>
            <input type='education' name='education' className='form-control' placeholder='Enter Password'
              value={values.education} onChange={e => setValues({ ...values, education: e.target.value })} />
          </div>
          <div>
            <label htmlFor='address'>Password:</label>
            <input type='address' name='address' className='form-control' placeholder='Enter Password'
              value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} />
          </div><br />
          <button className='btn btn-info'>Update</button>
        </form>

      </div>

    </div>
  )
}

export default Edit;