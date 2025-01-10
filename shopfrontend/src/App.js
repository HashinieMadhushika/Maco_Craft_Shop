import React from "react";
import Home from "./Js/Home.js"; // Import the Home component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Js/About"; // Import About Us component
import Shop from "./Js/Shop"; // Import Shop component
import Contact from "./Js/Contact"; // Import Contact Us component

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
};


export default App;
