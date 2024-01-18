import React, { useState, useEffect } from "react";
import "../../StyleComponent/forgetpass.css";
import Swal from "sweetalert2";
import NavBar from "../component/์NavBar";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  // email will be a props when user login.
  // how to get email from browser?
  
  const handleAlert = async () => {
    // Check email against the database
    const emailExists = await checkEmailInDatabase(email);

    // Use ternary operator to determine the alert message
    const alertMessage = emailExists
      ? {
          icon: "success",
          title: "Reset password has been sent",
        }
      : {
          icon: "error",
          title: "Invalid email",
        };

    Swal.fire({
      position: "center",
      ...alertMessage,
      showConfirmButton: false,
      timer: 1650,
    });
  };

  const checkEmailInDatabase = async (email) => {
    // Replace this with an actual API call to check the email in your database
    // For simplicity, using a hardcoded value here
    return email === "email@example.com";
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission and page refresh
    handleAlert();
  };

  return (
    <div>
      <div className="mb-5">

      <NavBar/>
      </div>
      <div className="forgetPass d-flex justify-content-center align-items-center">
        <form className="text-center" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <p>Insert your email to receive the reset password verification</p>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="submit" // Use type="submit" for the button
              className="btn btn-warning submitBtn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
