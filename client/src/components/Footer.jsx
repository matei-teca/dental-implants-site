import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-nav">
      <ul>
        <li>
          <Link to="/">
            <img 
              src="https://static.thenounproject.com/png/610387-200.png" 
              alt="Home Icon" 
              className="footer-home-icon"
            />
          </Link>
        </li>
        <li><Link to="/about">About</Link></li>
        <li>Services</li>
        <li>Testimonials</li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <p>&copy; {new Date().getFullYear()} O.C. Dental Implants</p>
    <p>Contact us at: (555) 555-5555</p>
  </footer>
);

export default Footer;
