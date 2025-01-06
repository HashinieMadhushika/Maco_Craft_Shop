import React, { useState, useEffect } from "react";
import "./Css/Home.css"; // Import the CSS file
import logo from "./Images/Maco_Craft_Logo-01.png"; // Logo image
import frock from "./Images/Frock-02.jpg"; // Other product images
import croptop from "./Images/Croptop-05.jpg";
import bunny from "./Images/Bunny.jpg";
import bag from "./Images/Bag 11.jpg";
import hairband from "./Images/Hair Band-01.jpg";
import bouquet from "./Images/Bouq-04.jpg";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [typewriterText, setTypewriterText] = useState("");
  const text = "Crafting joy, One stitch at a time with Maco Craft.";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    let isClearing = false;

    const typeEffect = () => {
      if (!isClearing && index < text.length) {
        setTypewriterText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed here
      } else if (index === text.length) {
        isClearing = true;
        setTimeout(() => {
          setTypewriterText("");
          index = 0;
          isClearing = false;
          typeEffect();
        }, 1000); // Pause before restarting
      }
    };

    typeEffect();
  }, [text]);

  // Search functionality
  const handleSearch = () => {
    if (searchInput) {
      alert(`You searched for: ${searchInput}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Maco Craft Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#shop">Shop Now</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search :"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      <main className="content">
        <h1>MACO CRAFT</h1>
        <p id="typewriter">{typewriterText}</p>
        <div className="product-grid">
          <div className="product-item">
            <img src={frock} alt="Frock" />
            <span className="label">FROCKS</span>
          </div>
          <div className="product-item">
            <img src={croptop} alt="Crop Top" />
            <span className="label">CROPTOPS</span>
          </div>
          <div className="product-item">
            <img src={bunny} alt="Toy" />
            <span className="label">TOYS</span>
          </div>
          <div className="product-item">
            <img src={bag} alt="Bag" />
            <span className="label">BAGS</span>
          </div>
          <div className="product-item">
            <img src={hairband} alt="Accessory" />
            <span className="label">ACCESSORIES</span>
          </div>
          <div className="product-item">
            <img src={bouquet} alt="Bouquet" />
            <span className="label">BOUQUETS</span>
          </div>
        </div>
      </main>
    </div>
  );
};
  
export default App;

