import React from "react";
import Logo from "../assets/Logo.svg";
import { useState } from "react";
import LoginPopup from "./LoginPopup";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [login, setLogin] = useState(false);

  const openLogin = () => {
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };

  const directToSignUp=()=>{
    navigate('/register');
  }
  return (
    <div>
      <header
        className="d-flex align-items-center justify-content-between py-1 border-"
        style={{backgroundColor: '#333'}}
        id="Nav"
      >
        <div className="col-md-3">
          <NavLink
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={Logo} alt="Your Logo" width="120" height="75" />
          </NavLink>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <ul className="nav justify-content-center mb-md-0 me-3">
            <li>
              <NavLink
                to="/"
                className="nav-link px-2 text-warning link-secondary"
              >
                Home
              </NavLink>
            </li>
          </ul>

          <ul className="nav justify-content-center mb-md-0 me-3">
            <li>
              <NavLink
                to="/hr"
                className="nav-link px-2 text-warning link-secondary"
              >
                HR
              </NavLink>
            </li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              onClick={openLogin}
              className="btn btn-outline-warning me-2 lh-1"
            >
              Login
            </button>
            {login && (
              <LoginPopup
                showPopup={login}
                onClick={openLogin}
                onClose={closeLogin}
              />
            )}
            <NavLink to="/register">
              <button
                type="button"
                className="btn btn-warning text-light link-dark lh-1"
                onClick={directToSignUp}
                style={{marginRight: '15px'}}
              >
                Sign-up
              </button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}
