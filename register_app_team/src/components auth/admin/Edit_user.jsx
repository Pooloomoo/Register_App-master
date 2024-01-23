import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Form_Edit = ({ label, onInputChange, value }) => {
  const handleInputChange = (event) => {
    onInputChange(label, event.target.value); 
  };

  return (
    <div className="form-edit">
      <label className='label1'>Please Edit Your {label} :</label>
      <div className='input'>
        <input
          className='input1'
          type="text"
          onChange={handleInputChange}
          value={value}
          placeholder={label}
        />
      </div>
    </div>
  );
};

const EditUser = ({ userId }) => {
  const [data, setData] = useState({});
  const [values, setValues] = useState({
    Name: '',
    Last_name: '',
    Email: '',
    Address: '',
    Education: '',
    Phone: '',
  });

  useEffect(() => {
    // Fetch user data based on userId
    axios.get(`http://localhost:8200/api/User/${userId}`)
      .then(response => {
        setData(response.data);
        setValues(response.data); // Set initial values based on fetched data
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]);

  const handleInputChange = (label, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send a PUT request to update user data
    axios.put(`http://localhost:8200/api/User/${userId}`, values)
      .then(response => {
        console.log('User data updated successfully');
        console.log(response.data); // log the updated data from the server

        // Check if the response data has the expected structure
        if (response.data && typeof response.data === 'object') {
          // Update the local state with the new values
          setValues(prevValues => ({
            ...prevValues,
            ...response.data,
          }));
        } else {
          console.error('Invalid response structure:', response.data);
        }

        // Additional logic if needed
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div className="list_wrapper">
      <div className="list_div">
        <form onSubmit={handleFormSubmit}>
          <div className="form-container">
            <div className="inform">
              <Form_Edit label={values.Name} onInputChange={handleInputChange} value={values.Name} />
              <Form_Edit label="Last_name" onInputChange={handleInputChange} value={values.Last_name} />
              <Form_Edit label="Email" onInputChange={handleInputChange} value={values.Email} />
              <Form_Edit label="Address" onInputChange={handleInputChange} value={values.Address} />
              <Form_Edit label="Education" onInputChange={handleInputChange} value={values.Education} />
              <Form_Edit label="Phone" onInputChange={handleInputChange} value={values.Phone} />
              <input className="submit" type="submit" />
              <br />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
