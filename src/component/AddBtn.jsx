import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AddBtn() {
  return (
    <div className='container d-flex justify-content-end col-8'>
      <NavLink 
      to="/hrcreateproject"
      className="btn btn-success"
      style={{maxWidth:'65px'}}>
        Add
      </NavLink>
    </div>
  )
}
