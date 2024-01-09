// AuthPopup.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../StyleComponent/Login.css";

export default function LoginPopup({ showPopup, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login clicked with email:", email, "and password:", password);
  };

  const handleRegister = () => {
    // Add your register logic here
    console.log(
      "Register clicked with email:",
      email,
      "and password:",
      password
    );
  };

  return (
    <div className={`popup ${showPopup ? "open" : ""}`}>
      <div className="popup-content">
        <button className="closebtn " onClick={onClose}>
          &times;
        </button>
        <div className="contentText">
          <h2 className="text-warning">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a
                href="#"
                className="small text-secondary d-flex justify-content-end"
              >
                Forget your password?
              </a>
            </div>

            <button
              type="button"
              className="btn btn-warning text-light"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="signupbtn">
              <p href="#">
                {" "}
                or Sign up{" "}
                <span>
                  <a href="#">here</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
