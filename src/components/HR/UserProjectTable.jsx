import React from 'react';
import UserProjectRow from './UserProjectRow';
import { useState } from 'react';
import { useLocation } from 'react-router-dom/dist';

export default function UserProjectTable(props) {
  const userProjects = props.userProjects;
  const handleDelete = props.handleDelete;

  // Utility function to extract project ID from URL path
  const extractProjectIdFromPath = (path) => {
    const match = path.match(/\/hr\/user\/project\/(\d+)/);
    return match ? match[1] : 'unknown';
  };

  // useLocation hook to get the current location
  const location = useLocation();
  const projectId = extractProjectIdFromPath(location.pathname);

  const handleDownloadCSV = () => {
    // Define the fields you want to include
    const fields = [
      'user.id',
      'user.firstName',
      'user.lastName',
      'user.educationLevel', // Update to 'user.educationLevel' if that's the correct property
      'user.phoneNumber',
      'status.score',
      'status.userStatus'
    ];

    // Generate CSV content
    const csvContent = [
      fields.join(','),
      ...userProjects.map((userProject) =>
        fields.map((field) => String(getNestedProperty(userProject, field) ?? '')).join(',')
      )
    ].join('\n');

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);

    // Use projectID in the file name
    link.download = `userProjects_projectID_${projectId}.csv`;

    link.click();
  };

  // Utility function to get nested property
  const getNestedProperty = (obj, path) => {
    const properties = path.split('.');
    return properties.reduce((acc, prop) => acc?.[prop], obj);
  };

  return (
    <div className="card mb-4 border-0">
      <div className="d-flex justify-content-between align-items-center mb-4 border-0 col-sm-11 bg-white">
        <h1 className="card-header">User Project List</h1>
        <button onClick={handleDownloadCSV} className="btn btn-success" style={{ maxWidth: '200px' }}>
          Download CSV
        </button>
      </div>
      <div className="card-body mb-4 border-0">
        <div className="table-responsive">
          <table className="table table-hover table-dark rounded-4 overflow-hidden">
            <thead>
              <tr>
                <th scope="col">user.id</th>
                <th scope="col">user.firstName</th>
                <th scope="col">user.lastName</th>
                <th scope="col">user.education</th>
                <th scope="col">Phone Number</th>
                <th scope="col">status.score</th>
                <th scope="col">status.userStatus</th>
                <th scope="col">edit</th>
                <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {userProjects.map((userProject) => (
                <UserProjectRow key={userProject.id} userProject={userProject} handleDelete={handleDelete} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
