import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import UserProjectRow from './HR/UserProjectRow';

export default function UserProjectTable(props) {
  const userProjects = props.userProjects;
  const handleDelete = props.handleDelete;  

  return (
      <div className="card mb-4 border-0">
          <h1 className="card-header d-flex justify-content-between align-items-center mb-4 border-0 col-sm-11 bg-white">
            userProject LIST
          </h1>
          <div className="card-body mb-4 border-0">
              <table id="example1" className="table table-hover table-dark rounded-4 overflow-hidden ">
                  <thead>
                      <tr>
                        <th scope="col">userprojectid</th>
                        {/* <th scope="col">project.projectName</th> */}
                        <th scope="col">user.id</th>
                        <th scope="col">user.firstName</th>
                        <th scope="col">user.lastName</th>
                        <th scope="col">user.education</th>
                        <th scope="col">status.id</th>
                        <th scope="col">status.score</th>
                        <th scope="col">status.userStatus</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                      </tr>
                  </thead>

                  <tbody>
                      {/* { (userProjects) ? userProjects.map((userProject) => <UserProjectRow key={userProject.id} userProject={userProject} handleDelete={handleDelete}></UserProjectRow>) 
                        : console.log("userProject is null!")
                      } */}
                      {userProjects.map((userProject) => <UserProjectRow key={userProject.id} userProject={userProject} handleDelete={handleDelete}></UserProjectRow>)}
                  </tbody>
              </table>
          </div>
      </div>
  )
}