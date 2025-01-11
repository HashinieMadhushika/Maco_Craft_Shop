import React from 'react';
import "../Css/Shop.css";
import Header from './Header';
import Footer from './Footer';
import Background from "../Images/B2.jpg";

const ShopNow = () => {
  return (
    <div>
        <Header/>

    <section className="hero-section">
      <img src={Background} alt="Coffee being poured" className="hero-image" /> 
      <div className="hero-text">
        <h2>Welcome!</h2>
        <p>We serve the richest coffee in the city!</p>
      </div>
      <a href="#" className="hero-button">Order Now</a> 
    </section>

    <Footer/>
    </div>
  );
};

export default ShopNow;