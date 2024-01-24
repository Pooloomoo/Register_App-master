import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState({
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
        setUser(res.data)
      })
      .catch(err => console.log("fecting user error: " + err))
  }, [])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/user/' + id, user)
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
            <h1>{`EDIT USER ID: ${user.id}`}</h1>
          </div>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' name='fName' className='form-control' placeholder='Enter First Name'
              value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='lName' className='form-control' placeholder='Enter Last Name'
              value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} />
          </div>
          <div>
            <p>Email:</p>
            <p>
              {user.email}
            </p>
          </div>
          <div>
            <p>Password:</p>
            <p>
              {user.password}
            </p>
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone:</label>
            <input type='phone' name='phone' className='form-control' placeholder='Enter Password'
              value={user.phoneNumber} onChange={e => setUser({ ...user, phoneNumber: e.target.value })} />
          </div>
          <div>
            <label htmlFor='educationLevel'>Education:</label>
            <input type='education' name='education' className='form-control' placeholder='Enter Password'
              value={user.educationLevel} onChange={e => setUser({ ...user, educationLevel: e.target.value })} />
          </div>
          <div>
            <label htmlFor='address'>Address:</label>
            <input type='address' name='address' className='form-control' placeholder='Enter Password'
              value={user.address} onChange={e => setUser({ ...user, address: e.target.value })} />
          </div><br /> 
          <button className='btn btn-warning'>Update</button>
          <Link className="btn-group text-decoration-none" to={'/user-profile'}>
            <button id="button1" className="btn btn-warning">Cancel</button>
          </Link>
        </form>

      </div>

    </div>
  )
}

export default Edit;