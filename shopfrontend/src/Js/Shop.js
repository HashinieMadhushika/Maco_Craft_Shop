import React from 'react';
import "../Css/Shop.css";
import Header from './Header';
import Footer from './Footer';
import f1 from "../Images/Frock-01.jpg";
import f2 from "../Images/Frock-02.jpg";
import f3 from "../Images/Frock-03.jpg";
import f4 from "../Images/Frock-04.jpg";
import f5 from "../Images/Frock-05.jpg";
import ct1 from "../Images/ct1.jpg";
import ct2 from "../Images/ct2.jpg";
import ct3 from "../Images/ct3.jpg";
import ct4 from "../Images/Croptop-01.jpg";
import ct5 from "../Images/Croptop-05.jpg";
import t1 from "../Images/Angry Bird.jpg";
import t2 from "../Images/Bunny.jpg";
import t3 from "../Images/Hello kitty.jpg";
import t4 from "../Images/Kuromi.jpg";
import t5 from "../Images/Pooh.jpg";
import b1 from "../Images/Bag 10.jpg";
import b2 from "../Images/Bag 11.jpg";
import b3 from "../Images/Bag-01.jpg";
import b4 from "../Images/Bag-02.jpg";
import b5 from "../Images/Bouq-04.jpg";
import a1 from "../Images/Clips-01.jpg";
import a2 from "../Images/Clips-02.jpg";
import a3 from "../Images/Earings-01.jpg";
import a4 from "../Images/Hair Band-01.jpg";
import a5 from "../Images/Hair Band-02.jpg";
import bq1 from "../Images/Bouq-01.jpg";
import bq2 from "../Images/Bouq-02.jpg";
import bq3 from "../Images/Bouq-03.jpg";
import bq4 from "../Images/Bouq-04.jpg";
import bq5 from "../Images/Bouq-05.jpg";

import { Link } from 'react-router-dom'; // Import Link for navigation

const ShopNow = () => {



  const menuItems = [
    {
      /*Frocks Section */
      name: 'Long Party Frock',
      image: f1,
      price: '5000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: f2,
      price: '4500',
      description: 'A whipped coffee drink made with instant coffee, sugar, and hot water.'
    },
    {
      name: 'Short Party Frock',
      image: f3,
      price: '5000',
      description: 'A refreshing cold coffee drink made with chilled coffee and milk.'
    },
    {
      name: 'Short Casual Frock',
      image: f4,
      price: '4000',
      description: 'A traditional South Indian coffee brewed using a filter.'
    },
    {
      name: 'Short Casual Frock',
      image: f5,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    /*Croptop Section */
    {
      name: 'Short Casual Frock',
      image: ct1,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    {
      name: 'Short Casual Frock',
      image: ct2,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    {
      name: 'Short Casual Frock',
      image: ct3,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    {
      name: 'Short Casual Frock',
      image: ct4,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    {
      name: 'Short Casual Frock',
      image: ct5,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    /*Toys section */
    {
      name: 'Short Casual Frock',
      image: t1,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: t2,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: t3,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: t4,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: t5,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    
    /*Bags collection */
    {
      name: 'Short Casual Frock',
      image: b1,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: b2,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: b3,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: b4,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: b5,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

    /*Accessories collection */
    {
      name: 'Short Casual Frock',
      image: a1,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: a2,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: a3,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: a4,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: a5,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },


    /*Bouqets collection */
    {
      name: 'Short Casual Frock',
      image: bq1,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: bq2,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: bq3,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: bq4,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },
    {
      name: 'Short Casual Frock',
      image: bq5,
      price: '4000',
      description: 'A classic espresso-based coffee with steamed milk and a layer of foam.'
    },

  ];

  const frockItems = menuItems.slice(0, 5); // Get first 5 items for frocks
  const croptopItems = menuItems.slice(5 , 10); // Get items from index 5 onwards for croptops 
  const toyItems = menuItems.slice(10 ,15);
  const bagItems = menuItems.slice(15 , 20);
  const accItems = menuItems.slice(20 , 25);
  const bouqItems = menuItems.slice(25);



  return (
    <div>
        <Header/>

         <section className="hero-section">
      <div className="hero-content">
        <h2>Welcome!</h2>
        <p>We serve the richest coffee in the city!</p>
      </div>
    <a href="/Shop" className="hero-button">Order Now</a> 
          </section>

    {/*Frocks Section */}
    <div>
     <div className="menu-container">
      <h1>Frocks Collection</h1>
      <div className="menu-grid">
        {frockItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs. {item.price}</p>
            <Link to="/order-now" className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      </div>
      
      {/*Croptop Section */}
      <div >
      <div className="menu-container">
      <h1>Croptops Collection</h1>
      <div className="menu-grid">
        {croptopItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs. {item.price}</p>
            <Link to="/order-now" className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      </div>
      </div>

        {/*Toys Section */}
      <div >
      <div className="menu-container">
      <h1>Toys Collection</h1>
      <div className="menu-grid">
        {toyItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs. {item.price}</p>
            <Link to="/order-now" className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      </div>
      </div>

         {/*Bags Section */}
      <div >
      <div className="menu-container">
      <h1>Bags Collection</h1>
      <div className="menu-grid">
        {bagItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs. {item.price}</p>
            <Link to="/order-now" className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      </div>
      </div>

      
         {/*Accessories Section */}
         <div >
      <div className="menu-container">
      <h1>Accessories Collection</h1>
      <div className="menu-grid">
        {accItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs. {item.price}</p>
            <Link to="/order-now" className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      </div>
      </div>

      {/*Bouqets Section */}
      <div >
      <div className="menu-container">
      <h1>Accessories Collection</h1>
      <div className="menu-grid">
        {bouqItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rs. {item.price}</p>
            <Link to="/order-now" className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      </div>
      </div>

      {/* Add other sections like "Our Special Dessert" here */}

    </div>



    <Footer/>
    </div>
  );
};

export default ShopNow;