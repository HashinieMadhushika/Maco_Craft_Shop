import React, { useState } from "react";
import "../Css/Home.css"; // Import Home.css for styling
import logo from "../Images/Maco_Craft_Logo-01.png"; // Import logo
import frock1 from "../Images/Frock-02.jpg"; // Import product images
import croptop1 from "../Images/Croptop-05.jpg";
import toy1 from "../Images/Bunny.jpg";
import bag1 from "../Images/Bag 11.jpg";
import acc1 from "../Images/Hair Band-01.jpg";
import bouquet1 from "../Images/Bouq-04.jpg";
import { Link } from "react-router-dom";
import frock2 from "../Images/Frock-03.jpg";
import croptop2 from "../Images/Croptop-01.jpg";
import toy2 from "../Images/Pooh.jpg";
import bag2 from "../Images/Bag 10.jpg";
import acc2 from "../Images/Earings-01.jpg";
import bouquet2 from "../Images/Bouq-02.jpg";


const Home = () => {

//Search Function
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    if (searchInput) {
      alert(`You searched for: ${searchInput}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  //Image change Function
  const [hoveredImage, setHoveredImage] = useState('');

  const handleHover = (image) => {
    setHoveredImage(image);
  };

  const handleLeave = () => {
    setHoveredImage('');
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link">
                Shop Now
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>


 {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search :"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/*Maco Craft Section */}
      <main className="content">
        <h1>Welcome to Maco Craft!</h1>
        <div class="animated-text-section">
          <h2>Crafting joy, one stitch at a time</h2>
        </div>

        <div className="product-grid">
          <div className="product-item">
          <img
            src={hoveredImage === 'frock' ? frock2 : frock1}
            alt="Frock"
            onMouseEnter={() => handleHover('frock')}
            onMouseLeave={handleLeave}
          />
            <span className="label">FROCKS</span>
          </div>
          <div className="product-item">
          <img
            src={hoveredImage === 'croptop' ? croptop2 : croptop1}
            alt="Frock"
            onMouseEnter={() => handleHover('croptop')}
            onMouseLeave={handleLeave}
          />
            <span className="label">CROPTOPS</span>
          </div>
          <div className="product-item">
          <img
            src={hoveredImage === 'toy' ? toy2 : toy1}
            alt="Frock"
            onMouseEnter={() => handleHover('toy')}
            onMouseLeave={handleLeave}
          />
            <span className="label">TOYS</span>
          </div>

          <div className="product-item">
          <img
            src={hoveredImage === 'bags' ? bag2 : bag1}
            alt="Frock"
            onMouseEnter={() => handleHover('bags')}
            onMouseLeave={handleLeave}
          />
            <span className="label">BAGS</span>
          </div>

          <div className="product-item">
          <img
            src={hoveredImage === 'acceccories' ? acc2 : acc1}
            alt="Frock"
            onMouseEnter={() => handleHover('acceccories')}
            onMouseLeave={handleLeave}
          />
            <span className="label">ACCESSORIES</span>

          </div>
          <div className="product-item">
          <img
            src={hoveredImage === 'bouquets' ? bouquet2 : bouquet1}
            alt="Frock"
            onMouseEnter={() => handleHover('bouquets')}
            onMouseLeave={handleLeave}
          />
            <span className="label">BOUQUETS</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
