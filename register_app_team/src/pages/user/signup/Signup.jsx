import React, { useState, useEffect, useRef } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../util/APIUtils";
import { toast as Alert } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import axios from "axios";
// import { postUserData } from "../../../util/APIUtils";

const USER_REGEX = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const PHONE_REGEX = /^0[689]\d{8}$/;
const ADDRESS_REGEX = /^[A-Za-z0-9'\.\-\s\,]{10,255}$/;

function Signup(props) {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Signup with SpringSocial</h1>
        <SignupForm {...props} />
        <span className="login-link">
          Already have an account? <Link to="/login">Login!</Link>
        </span>
      </div>
    </div>
  );
}

function SignupForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    user: {
      id: ""
    }
  });
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [userEducation, setUserEducation] = useState("");
  const [validUserEducation, setValidUserEducation] = useState(false);
  const [userEducationFocus, setUserEducationFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    educationLevel: '',
    address: '',
  });

  const nameRef = useRef();
  const errRef = useRef();
  const lastNameRef = useRef(null);
  const eduRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  function handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
   
      // Update formData
    if (inputName === "email") {
      let updatedUserData = { ...userData, [inputName]: inputValue };
      let updatedUser = { ...formData, user: {email: inputValue} };
      setFormData(updatedUser);
      setFormData(updatedUserData);
      
      // console.log(formData.email)
      // setFormData((prevFormData) => ({
        // ...prevFormData,
      // setFormData({
        // ...updatedFormData, user: {email: inputName}
      // })
        // user: { email: formData.email },
      // })
      // );
    } else {
      let updatedFormData = { ...formData, [inputName]: inputValue };
        setFormData(updatedFormData);
    }
    if (inputName === "email" || inputName === "password") {
      let updatedUserData = { ...userData, [inputName]: inputValue };
      setUserData(updatedUserData);
    }
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      //   user: { email: formData.email },
      // }));
    
    // Conditionally update userData
    
  }
  

  async function handleSubmit(event) {
    event.preventDefault();
    // Now you can access updated `userData` for the console log.
    console.log("user data:", userData);
    
    try {
      const userDataResponse = await axios.post(
        "http://localhost:8080/api/user/",
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    
    } catch (error) {
      console.error("Adding user data error: " + error);
      Alert.error(
        (error && error.message) ||
        "Oops! Something went wrong. Please try again!"
      );
    }
    
    // Continue with the signup request
    const signUpRequest = Object.assign({}, formData);
    try {
      const response = await signup(signUpRequest);
      Alert.success(
        "You're successfully registered. Please login to continue!"
      );
      navigate("/login");
    } catch (error) {
      console.error("Sign-up error: " + error);
      Alert.error(
        (error && error.message) ||
        "Oops! Something went wrong. Please try again!"
      );
    }
    

  }

  useEffect(() => {
    const result = USER_REGEX.test(name);
    // console.log("NAME_REGEX " + result);
    // console.log(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = USER_REGEX.test(lastName);
    // console.log("LASTNAME_REGEX " + result);
    // console.log(lastName);

    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = userEducation !== null;
    // console.log(userEducation);
    // console.log("validUserEducation " + result);
    setValidUserEducation(result);
  }, [userEducation]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    // console.log("PHONE_REGEX " + result);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = ADDRESS_REGEX.test(address);
    // console.log(address);
    // console.log("ADDRESS " + result);
    setValidAddress(result);
  }, [address]);

  return (
    <div className="regis_container">
      <form onSubmit={handleSubmit}>
        <div className="form-item form-row">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-item name_input ">
          <input
            type="text"
            id="nameInput"
            placeholder="Name"
            className="form-control"
            name="userData.firstName"
            ref={nameRef}
            autoComplete="off"
            onChange={(e) => {
              let x = { ...userData,
                firstName: e.target.value };
             //console.log(x);
             setUserData(x);
              
            }}
            required
            /* aria-invalid = {validName ? "false" : "true"}
                            aria-describedby="nameNote" */
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          />
          {nameFocus && (
            <Overlay
              target={nameRef.current}
              show={!validName}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  4 to 24 characters.
                  <br />
                </Tooltip>
              )}
            </Overlay>
          )}
        </div>

        <div className="form-item lastname_input ">
          <input
            type="text"
            id="lastNameInput"
            placeholder="Last Name"
            className="form-control"
            name="userData.lastName"
            ref={lastNameRef}
            autoComplete="off"
            onChange={(e) => {
              let x = { ...userData,
                lastName: e.target.value };
             //console.log(x);
             setUserData(x);
              
            }}
            required
            /* aria-invalid = {validLastName ? "false" : "true"}
                            aria-describedby="lastNameNote" */
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
          />
          {lastNameFocus && (
            <Overlay
              target={lastNameRef.current}
              show={!validLastName}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  4 to 24 characters.
                  <br />
                </Tooltip>
              )}
            </Overlay>
          )}
        </div>

        <div className="form-item ">
          <select
            id="userEducation"
            ref={eduRef}
            className="form-control"
            name="userData.educationLevel"
            // value={userEducation || ""} //set the value to '' when first start will has and empty value string
            onChange={(e) => {
              let x = { ...userData,
                educationLevel: e.target.value };
             //console.log(x);
             setUserData(x);
              
            }}
            required
            onClick={() => setUserEducationFocus(true)}
            onBlur={() => setUserEducationFocus(false)}
          >
            <option value="" disabled defaultValue>
              Select Education
            </option>
            <option value="HIGH_SCHOOL">High School</option>
            <option value="MASTERS_DEGREE">Bachelor's Degree</option>
            <option value="BACHELORS_DEGREE">Master's Degree</option>
            <option value="PHD">PhD</option>
          </select>
          {userEducationFocus && (
            <Overlay
              target={eduRef.current}
              show={!validUserEducation}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Please select your education
                </Tooltip>
              )}
            </Overlay>
          )}
        </div>

        <div className="form-item">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
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
          <input
            type="text"
            id="phone"
            className="form-control"
            placeholder="Phone Number"
            ref={phoneRef}
            autoComplete="off"
            name="userData.phoneNumber"
            onChange={(e) => {
              let x = { ...userData,
                phoneNumber: e.target.value };
             //console.log(x);
             setUserData(x);
            }}
            required
            maxLength={10}
            /* aria-invalid = {validPhone ? "false" : "true"}
                          aria-describedby="overlay-phone" */
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
          />
          {phoneFocus && (
            <Overlay
              target={phoneRef.current}
              show={!validPhone}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-phone" {...props}>
                  Start with 0 , Only number and not more than 10 digits.
                </Tooltip>
              )}
            </Overlay>
          )}
        </div>

        <div className="form-item">
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Address"
            autoComplete="off"
            required
            ref={addressRef}
            name="userData.address"
            onChange={(e) => {
              let x = { ...userData,
                address: e.target.value };
             //console.log(x);
             setUserData(x);
            }}
            onFocus={() => setAddressFocus(true)}
            onBlur={() => setAddressFocus(false)}
          />
          {addressFocus && (
            <Overlay
              target={addressRef.current}
              show={!validAddress}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-address" {...props}>
                  No spacial characters allowed.
                </Tooltip>
              )}
            </Overlay>
          )}
        </div>

        <div className="form-item">
          <button type="submit" className="btn btn-block btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
