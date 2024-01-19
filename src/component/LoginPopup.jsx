// AuthPopup.js
import React, { useState, useContext, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../StyleComponent/Login.css";
import { NavLink } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import RegisterForm from "../routes/RegisterForm";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

export default function LoginPopup({ showPopup, onClose }) {
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState(""); 
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  }

  const handlePopupOn=()=>{
    setPopup(true)
  }

  const handlePopupClose=()=>{
    setPopup(false)
  }

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
                ref={emailRef} 
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
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
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
              className="loginBtn btn btn-warning text-light link-dark lh-1 mb-auto mt-auto"
              onClick={handlePopupOn}
            >
              Login <IoLogIn />
            </button>
            <div className="signupbtn mb-auto mt-auto">
              <p href="#">
                or Sign up{" "}
                <span>
                  <NavLink
                    to="/register"
                    style={{ textDecoration: "none" }}
                    onClick={handlePopupClose}
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
