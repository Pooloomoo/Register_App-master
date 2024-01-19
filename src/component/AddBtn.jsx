import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AddBtn() {
  return (
    <div className='container d-flex justify-content-end col-8'>
      <NavLink 
      to="/profile"
      className="btn btn-success mb-3"
      style={{maxWidth:'65px'}}>
        Add
      </NavLink>
    </div>
  )
}
