import React from 'react';
import "../Css/About.css";
import myimage1 from "../Images/my Image-1.jpg";
import Footer from './Footer';
import Header from './Header';

function About() {
  return (
    <div>
        <Header/>

        <div className="about-me-box">
         <h1>About Me</h1>
        </div>

    <div className="about-container">
      <div className="about-me-image">
        <img src={myimage1} alt="Hashinie Madhushika" />
      </div>
      <div className="about-me-content">
        <h1>Hey... I'm Hashinie Madhushika</h1>
        <p>I'm the creator of Bella Coco Crochet. I'm a Crochet designer,</p>
        <p>Instructor,</p>
        <p>Author,</p>
        <p>University student and day dreamer.</p>
        <p>Creativity has always been important to me.</p>
        <h2>From a young age, I've had a love of arts and crafts. From spending hours and hours drawing and colouring on the living room floor, creating beautiful cross stitch pictures and making never ending knitted scarves, I've always loved indulging in crafts.</h2>
      </div>
    </div>


    <Footer/>
    </div>
  );
}

export default About;