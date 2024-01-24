import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateButton(props) {
  const path = props.path;
  return (
    <div className='container d-flex justify-content-end col-8' style={{ marginRight: '170px' }}>
      <NavLink 
      to={path}
      className="btn btn-warning text-dark d-md-block link-light"
      style={{maxWidth:'65px'}}>
        Create
      </NavLink>
    </div>
  )
}
