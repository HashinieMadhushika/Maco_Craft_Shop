import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/Registration.css";
import Header from './Header';
import Footer from './Footer';

const RegistrationSuccess = () => {
  return (

    <div className="background">
        <Header/>

    <div className="success-container">
      <h1>Registration Successful!</h1>
      <h2>Your account has been created successfully.</h2>
      <Link to="/login" className="login-button">
        Go to Login
      </Link>
    </div>

    <Footer/>
    </div>
  );
};

export default RegistrationSuccess;