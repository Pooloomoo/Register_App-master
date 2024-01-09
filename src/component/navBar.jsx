import React from "react";
import Logo from "../assets/Logo.svg";
import { useState } from "react";
import LoginPopup from "./LoginPopup";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [login, setLogin] = useState(false);

  const openLogin=()=>{
    setLogin(true)
  }
  const closeLogin=()=>{
    setLogin(false)
  }
  return (
    <div>
      <header
        className="d-flex align-items-center justify-content-between py-3 mb-4 border-bottom"
        id="Nav"
      >
        <div className="col-md-3">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={Logo} alt="Your Logo" width="120" height="75" />
          </Link>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <ul className="nav justify-content-center mb-md-0 me-3">
            <li>
              <Link to="#" className="nav-link px-2 link-secondary text-warning">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-light">
                About us
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" onClick={openLogin} className="btn btn-outline-warning me-2">
              Login
            </button>
            {login && <LoginPopup showPopup={login} onClose={closeLogin} />}
            <button type="button" className="btn btn-warning text-light">
              Sign-up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}