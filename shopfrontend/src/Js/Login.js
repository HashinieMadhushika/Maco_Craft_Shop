import React, { useState } from 'react';
import "../Css/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import Image from "../Images/B11.jpg";
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log('Login successful:', data);
        navigate('/'); 
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header />

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

            <button type="submit" className="login-button">
              Login
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
          <img src={Image} alt="placeImage" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
