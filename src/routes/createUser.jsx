import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateUser() {
  // const id = 0;
  const [users, setUsers] = useState({
    // id: id,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    educationLevel: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/user/", users, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        console.log("New User added");
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>CREATE USER</h1>
          </div>
          <div>
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter First Name "
              onChange={(e) =>
                setUsers({ ...users, firstName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(e) => setUsers({ ...users, lastName: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setUsers({ ...users, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setUsers({ ...users, password: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone:</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter Phone Number"
              value={users.phoneNumber}
              onChange={(e) => {
                const formattedPhoneNumber = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                setUsers({ ...users, phoneNumber: formattedPhoneNumber });
              }}
              inputMode="numeric"
              maxLength={10}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="educationLevel" className="form-label">
              User Education:
            </label>
            <select
              id="educationLevel"
              className="form-control"
              value={users.educationLevel}
              onChange={(e) =>
                setUsers({ ...users, educationLevel: e.target.value })
              }
              required
            >
              <option value="">Select Education</option>
              <option value="HIGH_SCHOOL">High School</option>
              <option value="BACHELORS_DEGREE">Bachelor's Degree</option>
              <option value="MASTERS_DEGREE">Master's Degree</option>
              <option value="PHD">PhD</option>
            </select>
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="address"
              name="address"
              className="form-control"
              placeholder="Enter Address"
              onChange={(e) => setUsers({ ...users, address: e.target.value })}
              required
            />
          </div>
          <br />
          <button className="btn btn-warning">Create</button>
          <Link className="btn-group text-decoration-none" to={`/admin/user`}>
            <button id="button1" className="btn btn-warning">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
