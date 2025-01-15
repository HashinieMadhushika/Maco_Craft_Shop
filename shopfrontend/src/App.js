import React from "react";
import Home from "./Js/Home.js"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Js/About"; 
import Shop from "./Js/Shop"; 
import Contact from "./Js/Contact"; 
import Login from "./Js/Login.js";
import Signup from "./Js/Signup.js";
import RegistrationSuccess from "./Js/Registration.js";
import GiftBox from "./Js/giftbox.js";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/registration-success" element={<RegistrationSuccess/>} />
      <Route path="/giftbox" element={<GiftBox/>}  />
   </Routes>
  </Router>
  );
};


export default App;
