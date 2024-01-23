import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css";

function AppHeader(props) {
  return (
    <header className="app-header">
      <div className="container">
        <div className="app-branding">
          <Link to="/" className="app-title">
            Demo Application
          </Link>
        </div>
        <div className="app-options">
          <nav className="app-nav">
            {props.authenticated ? (
              <ul>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <span onClick={props.onLogout}>Logout</span>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
