import React from 'react';
import Footer from './Footer';
import Header from "./Header";
import "../Css/Contact.css";
import arrow from "../Images/right-arrow.png";


const About = () => {
    return (
        <div>
    <Header/>

    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subheading">Crafting joy, One stitch at a time with Maco Craft.</p>
      <img src={arrow} alt="Arrowkey" />
    </div>
     
    <div className="contact-form-container">
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button className="submit-button">Submit Your Response</button>
      </div>

      <div className="news-alert">
        <h3>Our News Alerts</h3>
        <p>Stay inspired with our latest crochet creations and updates! Subscribe to our email list to receive daily alerts straight to your inbox, so you never miss out on new designs and offers. Your email is safe with us and we promise to keep our updates delightful and inspiring.</p>
        <input type="email" placeholder="E-mail" />
        <button>Submit Your Response</button>
      </div>
    </div>
      
    <Footer/>
       </div>

     
    );
  };
  
  export default About;