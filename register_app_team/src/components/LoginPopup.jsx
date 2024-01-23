// AuthPopup.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../StyleComponent/Login.css";
import { NavLink } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import RegisterForm from "../routes/RegisterForm";

export default function LoginPopup({ showPopup, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  }

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
      <div className="popup-content-login">
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
              <NavLink
                to="/forgot"
                className="small text-secondary d-flex justify-content-end"
                onClick={onClose}
              >
                Forget your password?
              </NavLink>
            </div>

            <button
              type="button"
              className="btn btn-warning text-light link-dark lh-1 mt-5"
              onClick={handleLogin}
            >
              Login <IoLogIn />
            </button>
            <div className="signupbtn">
              <p href="#">
                or Sign up{" "}
                <span>
                 <NavLink
                 to="/register"
                 style={{textDecoration: "none"}}
                 onClick={onClose}
                 >
                  here
                 </NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
