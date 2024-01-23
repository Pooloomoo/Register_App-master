import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";
import axios from "../api/axios";
import "../../StyleComponent/RegisterForm.css";
import "bootstrap/dist/css/bootstrap.css";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import NavBar from "../components/์NavBar";
const USER_REGEX = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const REGISTER_URL = "/register";
const PHONE_REGEX = /^0[689]\d{8}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ADDRESS_REGEX = /^[A-Za-z0-9'\.\-\s\,]{10,255}$/;

function RegisterForm() {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const eduRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const pwdMatchRef = useRef();
  const errRef = useRef();

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

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [validCheckBox, setValidCheckBox] = useState(false);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(name);
    console.log("NAME_REGEX " + result);
    console.log(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = USER_REGEX.test(lastName);
    console.log("LASTNAME_REGEX " + result);
    console.log(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = userEducation !== null;
    console.log(userEducation);
    console.log("validUserEducation " + result);
    setValidUserEducation(result);
  }, [userEducation]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    console.log("PHONE_REGEX " + result);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = ADDRESS_REGEX.test(address);
    console.log(address);
    console.log("ADDRESS " + result);
    setValidAddress(result);
  }, [address]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(email);
    console.log("EMAIL_REGEX " + result);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    if (matchPwd !== "") {
      const match = pwd === matchPwd;
      setValidMatch(match);
    }
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [name, lastName, pwd, matchPwd]);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [success, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    const v1 = USER_REGEX.test(name);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3 || !validCheckBox) {
      setErrMsg("Invalid Entry or Checkbox not checked");
      return;
    }
    try {
      /* const response = await axios.post(REGISTER_URL, 
                JSON.stringify({name, lastName , email, pwd , phone, education,address}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ); */
      /* console.log(response.data);
            console.log(response.accessToken);
            console.log(Json.stringify(response)); */
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response.status === 409) {
        setErrMsg("This name is already taken");
      } else {
        setErrMsg("Registrations failed");
      }
      errRef.current.focus();
    }
  }

  return (
    <div>
      <NavBar />
      {success ? (
        <div>
          <section className="content_register_complete">
            <div className="regis_complete">
              <h1 className="">Register Completed</h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redirect
                to Mainpage in 5 seccond
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section className="content_register">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="h1">Register</h1>
            <form className="regis_form" onSubmit={handleSubmit}>
              <div className="name_lastname_content">
                <div className="name_input">
                  <label htmlFor="name">
                    Name :
                    <span className={validName ? "valid" : "hide"}>
                      Correct
                    </span>
                    <span className={validName || !name ? "hide" : "invalid"}>
                      {" "}
                      {/* if empty input or validName hide Incorrect */}
                      Incorrect
                    </span>
                  </label>

                  <input
                    type="text"
                    id="nameInput"
                    ref={nameRef}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
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

                <div className="lastname_input">
                  <label htmlFor="lastName">
                    Last name :
                    <span className={validLastName ? "valid" : "hide"}>
                      Correct
                    </span>
                    <span
                      className={
                        validLastName || !lastName ? "hide" : "invalid"
                      }
                    >
                      {" "}
                      {/* if empty input or validName hide Incorrect */}
                      Incorrect
                    </span>
                  </label>

                  <input
                    type="text"
                    id="lastNameInput"
                    ref={lastNameRef}
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value)}
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
              </div>

              <div className="userEducation_box">
                <label htmlFor="userEducation" className="form-label">
                  Project Education
                </label>
                <select
                  id="userEducation"
                  ref={eduRef}
                  className="form-control"
                  value={userEducation || ""} //set the value to '' when first start will has and empty value string
                  onChange={(e) => setUserEducation(e.target.value)}
                  required
                  onClick={() => setUserEducationFocus(true)}
                  onBlur={() => setUserEducationFocus(false)}
                >
                  <option value="" disabled defaultValue>
                    Select Education
                  </option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
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

              <div className="phone_box">
                <label htmlFor="phone">
                  Phone numeber :
                  <span className={validPhone ? "valid" : "hide"}>Correct</span>
                  <span className={validPhone || !phone ? "hide" : "invalid"}>
                    Incorrect
                  </span>
                </label>
                <input
                  type="number"
                  id="phone"
                  ref={phoneRef}
                  autoComplete="off"
                  onChange={(e) => setPhone(e.target.value)}
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

              <div className="address_box">
                <label htmlFor="address">
                  Address :
                  <span className={validAddress ? "valid" : "hide"}>
                    Correct
                  </span>
                  <span
                    className={validAddress || !address ? "hide" : "invalid"}
                  >
                    Incorrect
                  </span>
                </label>
                <input
                  type="text"
                  id="address"
                  autoComplete="off"
                  required
                  ref={addressRef}
                  onChange={(e) => setAddress(e.target.value)}
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

              <div className="email_box">
                <label htmlFor="email">
                  Email address :
                  <span className={validEmail ? "valid" : "hide"}>Correct</span>
                  <span className={validEmail || !email ? "hide" : "invalid"}>
                    Incorrect
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  /* aria-invalid = {validEmail ? "false" : "true"}
                                aria-describedby='emailnote' */
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                {emailFocus && (
                  <Overlay
                    target={emailRef.current}
                    show={!validEmail}
                    placement="right"
                  >
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Please enter you email and don't forget @.
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </div>

              <div className="pwd_box">
                <label htmlFor="password">
                  Password :
                  <span className={validPwd ? "valid" : "hide"}>Correct</span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    Incorrect
                  </span>
                </label>
                <input
                  type="password"
                  id="password"
                  ref={pwdRef}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  /* aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote" */
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                {pwdFocus && (
                  <Overlay
                    target={pwdRef.current}
                    show={!validPwd}
                    placement="right"
                  >
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        8 to 24 english characters. <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character. <br />
                        Allowed special characters :{" "}
                        <span aria-label="exclamation">!</span>
                        <span aria-label="at symbol">@</span>
                        <span aria-label="hashtag">#</span>
                        <span aria-label="dollar sign">$</span>
                        <span aria-label="percent">%</span>
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </div>

              <div className="pwdMatch_box">
                <label htmlFor="confirm_pwd">
                  Confirm Password :
                  <span className={validMatch ? "valid" : "hide"}>Correct</span>
                  <span
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  >
                    Incorrect
                  </span>
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  ref={pwdMatchRef}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  /* aria-invalid={validMatch ? "false" : "true"}  
                                aria-describedby="confirmnote" */
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                {matchFocus && (
                  <Overlay
                    target={pwdMatchRef.current}
                    show={!validMatch}
                    placement="right"
                  >
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Must match the first password input field
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </div>

              <div className="policy">
                <input
                  type="checkbox"
                  id="checkbox"
                  required
                  /* aria-invalid={validCheckBox ? "false" : "true"}
                                aria-describedby="checkboxnote" */
                  onChange={(e) => setValidCheckBox(e.target.value)}
                />

                <span id="checkboxnote">
                  &nbsp;accept the
                  <Link to="/term-of-service" target="_blank">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" target="_blank">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </div>

              <div className="submit_btn_box">
                <button
                  class="btn btn-warning submit_btn"
                  disabled={
                    !validName ||
                    !validLastName ||
                    !validUserEducation ||
                    !validAddress ||
                    !validPhone ||
                    !validPwd ||
                    !validMatch ||
                    !validCheckBox
                      ? true
                      : false
                  }
                >
                  Sign Up
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
