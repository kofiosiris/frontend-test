import React, { useState } from "react";
import "./register.css";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/authActions"; // Adjust the path to your authActions.js file

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Dispatch the registerUser action
    try {
      await dispatch(registerUser(formData));
      alert("Registration successful!");
      // Redirect or perform other actions as needed
      navigate("/products"); // Redirect to the Product page
    } catch (error) {
      alert("Error during registration: " + error);
    }
  };

  return (
    <div className="registration__body">
      <div className="register__page">
        <AuthHeader />
        <div className="register__container">
          <h3 className="register__title">Create your customer account</h3>
          <div className="login__link">
            <span className="current__customer">Already a customer?</span>
            <span className="login__click">
              <Link to="/login">Click here to Login</Link>
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" name="fullName" placeholder="Enter your name" onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" name="phoneNumber" placeholder="Enter your number" onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" value="Male" id="dot-1" onChange={handleChange} />
              <input type="radio" name="gender" value="Female" id="dot-2" onChange={handleChange} />
              <input type="radio" name="gender" value="Prefer not to say" id="dot-3" onChange={handleChange} />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
