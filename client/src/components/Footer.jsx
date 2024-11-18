import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-nav">
      <ul>
        <li>
          <NavLink to="/">
            <img 
              src="https://static.thenounproject.com/png/610387-200.png" 
              alt="Home Icon" 
              className="footer-home-icon"
            />
          </NavLink>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/showcases">ShowCases</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
    <p>&copy; {new Date().getFullYear()} O.C. Dental Implants</p>
    <p>Contact us at: oana.teca@gmail.com</p>
  </footer>
);

export default Footer;
