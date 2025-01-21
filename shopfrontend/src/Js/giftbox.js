import React from 'react';
import Footer from './Footer';
import Header from "./Header";
import "../Css/giftbox.css";
import Im1 from "../Images/Pack1.jpg";
import Im2 from "../Images/Pack1.jpg";

const GiftBox = () =>{
    return(
        <div>
            <Header/>
            
            <div className="packages-container">
                    <img src={Im2} alt="main"/>
                    <div className="image-container">
                    <img src={Im1} alt="Packages" />
                   
                </div>
                
            </div>

            <Footer/>
        </div>
    )
};

export default GiftBox;