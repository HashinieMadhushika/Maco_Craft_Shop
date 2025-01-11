import React from 'react';
import "../Css/About.css";
import myimage1 from "../Images/my Image-1.jpg";
import Footer from './Footer';
import Header from './Header';
import img1 from "../Images/Profile-1.jpg"; // Replace with actual image paths
import img2 from "../Images/Profile-2.jpg";
import img3 from "../Images/Profile-5.jpg";
import img4 from "../Images/Profile-6.jpg";
import img5 from "../Images/Profile-7.jpg";
import logo from "../Images/Maco_Craft_Logo-01.png"

const About=()=> {

  return (
    <div>
        <Header/>

        <div className="watermark"> 
        <img src={logo} alt="Crochet Hook and Yarn Logo" /> 
      </div>

        <div className="about-me-box">
         <h1>About Me</h1>
        </div>

    <div className="about-container">
      <div className="about-me-image">
        <img src={myimage1} alt="Hashinie Madhushika" />
      </div>
      <div className="about-me-content">
        <h1>Hey... I'm Hashinie Madhushika</h1>
        <p>I'm the Owner of the Maco Craft Shop. I'm a Crochet designer,</p>
        <ul>
      <li>Instructor,</li>
      <li>Author,</li>
      <li>University student and day dreamer.</li>
      </ul>
        <p>Creativity has always been important to me.</p>
        <h2>From a young age, I've had a love of arts and crafts. From spending hours and hours drawing and colouring on the living room floor, creating beautiful cross stitch pictures and making never ending knitted scarves, I've always loved indulging in crafts.</h2>
      </div>
    </div>

    <div className="image-box">
        <img src={img1} alt="Center" className="image image-center" />
        <img src={img2} alt="Second row left" className="image image-row2-left" />
        <img src={img3} alt="Second row right" className="image image-row2-right" />
        <img src={img4} alt="Third row left" className="image image-row3-left" />
        <img src={img5} alt="Third row right" className="image image-row3-right" />
    </div>

    <div className="about-description">
      <p>During my time as a 2nd-year undergraduate at the Faculty of Engineering, University of Ruhuna, I discovered my love for staying engaged beyond academics. Between volunteering programs, committee work, and extracurricular activities, I found joy in crocheting - a creative passion I turned into a small business to support my university life. To share my creations and grow my venture, I launched a 
        <a href="https://www.youtube.com/your-channel-link" className="social-link"> YouTube </a> channel, 
        <a href="https://www.tiktok.com/@your-tiktok-username" className="social-link"> TikTok </a> account, 
        <a href="https://www.instagram.com/your-instagram-username" className="social-link"> Instagram </a> account, and 
        <a href="https://www.facebook.com/your-facebook-page-link" className="social-link"> Facebook </a> page, blending my engineering studies with entrepreneurial spirit.</p>
    </div>

    <Footer/>
    </div>
  );
}

export default About;