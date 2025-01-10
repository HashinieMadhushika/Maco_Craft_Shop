import "../Css/Header.css"; // Import Home.css for styling
import logo from "../Images/Maco_Craft_Logo-01.png"; // Import logo
 import { Link } from "react-router-dom"; 
import profileIcon from "../Images/Profile_Icon2.png";


const Header = () => {
return(

    <div>
    <header className="header">
     <div className="logo">
       <img src={logo} alt="Maco Craft Logo" />
     </div>
     
     <div className="profile">
     <Link to="/profile">
     <img src={profileIcon}
     alt="Profile Icon"
     className="profile-icon"
     />
     </Link>
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
   </div>
);
};

export default Header;