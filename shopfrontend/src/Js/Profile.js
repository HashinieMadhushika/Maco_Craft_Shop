import React, { useState } from 'react';
import "../Css/Profile.css";
import { Link, useNavigate } from 'react-router-dom';
import Image from "../Images/B11.jpg";
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate('/dashboard'); 
  };

  return (
    <div>
        <Header/>

    <div className="login-container">
        <div className="login-form">
      <h1>Welcome Back!</h1>
      <p>Please enter your details.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember for 30 days</label>
        </div>

        <Link to="/forgot-password" className="forgot-password-link">
          Forgot password?
        </Link>

        <button type="submit" className="login-button">
          Login
        </button>

        <button className="google-login-button">
          Sign in with Google
        </button>

        <p>
          Don't have an account? <Link to="/signup">Sign up for free</Link>
        </p>
      </form>

      <div className="testimonial">
        <blockquote>
          "We've been using Untitled to kickstart every new project and can't imagine working without it."
        </blockquote>
        <cite>Andi Lane, Founder, Catalog Web Design Agency</cite>
      </div>
      </div>

      <div className="login-image">
        <img src={Image} alt='placeImage'/>
      </div>
    </div>

    <Footer/>

    </div>
  );
};

export default Profile;