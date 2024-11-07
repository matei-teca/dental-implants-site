import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const Header = () => (

<header className="header">
<div className="logo">
<Link to="/">
  <img 
    src="https://static.thenounproject.com/png/610387-200.png" 
    alt="Home Icon" 
    style = {{width: "20px", marginRight: "10px"}}
  /> 
  Dental Implants
</Link></div>

<nav>
  <ul>
    <li><Link to="/about">About</Link></li>
    <li>Services</li>
    <li>Testimonials</li>
    <li>Contact</li>
    <li>
      <button className="cta-button">Book an Appointment</button>
    </li>
  </ul>
</nav>
</header>

);

export default Header;