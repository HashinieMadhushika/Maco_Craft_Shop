import React from "react";
import Home from "./Js/Home.js"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Js/About"; 
import Shop from "./Js/Shop"; 
import Contact from "./Js/Contact"; 
import Profile from "./Js/Profile.js";
import Signup from "./Js/Signup.js";
import RegistrationSuccess from "./Js/Registration.js";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/registration-success" element={<RegistrationSuccess/>} />
   </Routes>
  </Router>
  );
};


export default App;
