import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../../constants";
import { login } from "../../../util/APIUtils";
import { Link, Navigate } from "react-router-dom";
//import Alert from 'react-s-alert';
import { toast as Alert } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import "./Login.css";

function Login(props) {
  const location = useLocation();

  useEffect(() => {
    //console.log(location);
    if (location.state && location.state.error) {
      setTimeout(() => {
        Alert.error(location.state.error, {
          timeout: 5000,
        });
        props.history.replace({
          pathname: location.pathname,
          state: {},
        });
      }, 100);
    }

    return () => {
      console.log("Component unmount");
    };
  }, []);

  if (props.authenticated) {
    return (
      <Navigate
        replace
        to={{
          pathname: "/",
          state: { from: location },
        }}
      />
    );
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login to Application</h1>

        <LoginForm {...props} />

        <span className="signup-link">
          New user?{" "}
          <Link className="tosignup" to="/signup">
            Sign up!
          </Link>
        </span>
        <div
          className="forgetPass text-light text-sm mt-1"
          style={{ fontSize: "12px", textDecoration: "none" }}
        >
          ForgetPassword? click
          <span>
            <Link
              className="clickHere text-warning link-light"
              style={{ textDecoration: "none" }}
              to="/forgot"
            >
              {" "}
              Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

function LoginForm(props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  function handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    let x = { ...formData, [inputName]: inputValue };
    setFormData(x);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const loginRequest = Object.assign({}, formData);

    /*  login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        Alert.success("You're successfully logged in!");
        props.handleLoginSuccess();
        navigate("/" , {replace: true});
      })
      .catch((error) => {
        Alert.error((error && error.message) || "Oops! Something went wrong. Please try again!");
      });
*/
    try {
      let response = await login(loginRequest);
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      Alert.success("You're successfully logged in!");
      props.handleLoginSuccess();
      navigate("/", { replace: true });
    } catch (error) {
      Alert.error(
        (error && error.message) ||
          "Oops! Something went wrong. Please try again!"
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <button type="submit" className="btn btn-block btn-warning">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
