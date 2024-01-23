import React, {useState } from 'react';
import './Signup.css';
import { Link ,useNavigate} from 'react-router-dom';
import { signup } from '../../../util/APIUtils';
import { toast as Alert } from 'react-toastify';



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
  const [formData, setFormData] = useState({username: '', email: '', password: ''});
  const navigate = useNavigate();

  function handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    let x = {...formData , [inputName]: inputValue,};
    //console.log(x);
    setFormData(x);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const signUpRequest = Object.assign({}, formData);
/*
    signup(signUpRequest)
      .then((response) => {
        Alert.success("You're successfully registered. Please login to continue!");
        navigate('/login');
      })
      .catch((error) => {
        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
      });
*/
    try {
      const response = await signup(signUpRequest) ;
      Alert.success("You're successfully registered. Please login to continue!");
      navigate('/login');
    }catch(error){
      //console.log(error);
      Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
     
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input type="text" name="username" className="form-control" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
        </div>
        <div className="form-item">
          <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
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
          <button type="submit" className="btn btn-block btn-primary">
            Sign Up
          </button>
        </div>
      </form>
  );
}


export default Signup;
