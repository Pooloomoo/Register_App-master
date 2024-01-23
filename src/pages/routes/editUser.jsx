import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [users, setUsers] = useState({
    id: id,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: 0,
    educationLevel: '',
    address: ''
  })
  useEffect(() => {
    axios.get('http://localhost:8080/api/user/' + id)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => console.log("fecting user error: " + err))
  }, [])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/user/' + id, users)
      .then(res => {
        navigate(-1)
      })
      .catch(err => console.log("put error: " + err.response.data))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>{`EDIT USER ID: ${users.id}`}</h1>
          </div>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' name='fName' className='form-control' placeholder='Enter First Name'
              value={users.firstName} onChange={e => setUsers({ ...users, firstName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='lName' className='form-control' placeholder='Enter Last Name'
              value={users.lastName} onChange={e => setUsers({ ...users, lastName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
              value={users.email} onChange={e => setUsers({ ...users, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='text' name='password' className='form-control' placeholder='Enter Password'
              value={users.password} onChange={e => setUsers({ ...users, password: e.target.value })} />
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone:</label>
            <input type='phone' name='phone' className='form-control' placeholder='Enter Password'
              value={users.phoneNumber} onChange={e => setUsers({ ...users, phoneNumber: e.target.value })} />
          </div>
          <div>
            <label htmlFor='educationLevel'>Education:</label>
            <input type='education' name='education' className='form-control' placeholder='Enter Password'
              value={users.educationLevel} onChange={e => setUsers({ ...users, educationLevel: e.target.value })} />
          </div>
          <div>
            <label htmlFor='address'>Address:</label>
            <input type='address' name='address' className='form-control' placeholder='Enter Password'
              value={users.address} onChange={e => setUsers({ ...users, address: e.target.value })} />
          </div><br />
          <button className='btn btn-warning'>Update</button>
          <Link className="btn-group text-decoration-none" to={'/admin/user'}>
            <button id="button1" className="btn btn-warning">Cancel</button>
          </Link>
        </form>

      </div>

    </div>
  )
}

export default Edit;