import React from 'react';
import "../Css/Footer.css";
import { useNavigate } from 'react-router-dom';
/*import facebook from "../Images/facebook.png";
import insta from "../Images/instagram.png"; */
/* import tiktok from "../Images/tik-tok.png"; 
import twitter from "../Images/twitter.png";*/
 


function Footer() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>COMPANY AND OUR POLICIES</h3>
        <ul>
          <li onClick={() => navigate('/about-us')}>About us</li>
          <li onClick={() => navigate('/privacy-policy')}>Privacy Policy</li>
          <li onClick={() => navigate('/shipping')}>Shipping</li>
          <li onClick={() => navigate('/returns-exchange')}>Returns & Exchange policy</li>
          <li onClick={() => navigate('/terms-of-service')}>Terms of service</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>MACO CRAFT ONLINE STORE</h3>
        <ul>
          <li>Mon-Fri: 9:00AM to 6:00 PM</li>
          <li>Saturday: 9:00AM to 2:00 PM</li>
          <li>Sunday: 11:00AM TO 4:00 PM</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>CONTACT US</h3>
        <p>General Hotline: (011) 286 7511</p>
        <p>Order Updates: 077 3446447</p>
        <p>General Email: info@macocraft.lk</p>
        <p>Order Email: online@macocraft.lk</p>
      </div>

      <div className="footer-section">
        <h3>FOLLOW US ON</h3>
        <div className="footer-social-icons"> 
          <a href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener noreferrer">
          {/*  <img src={facebook} alt='facebook' /> */}
          </a>
          <a href="https://www.instagram.com/your-instagram-page-url" target="_blank" rel="noopener noreferrer">
            {/*<img src={insta} alt='insta' /> */}
          </a>
          <a href="https://www.twitter.com/your-twitter-page-url" target="_blank" rel="noopener noreferrer">
            {/*<img src={twitter} alt='twitter' /> */}
          </a>
        </div>
      </div>

      <p className="footer-copyright">
        <a href="/" onClick={handleHomeClick}>© 2024 MACO CRAFT</a> 
      </p>
    </footer>
  );
}

export default Footer;