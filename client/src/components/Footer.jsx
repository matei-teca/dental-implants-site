import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
import "./styles/Footer.css";

const texts = {
  en: ["About", "Services", "Testimonials", "Showcases", "Contact", "Book an Appointment"],
  de: ["Überuns", "Leistungen", "Erfahrungsberichte", "Vitrinen", "Kontakt", "Termin vereinbaren"]
}

const Footer = () => {
  const { language } = useLanguage();
  
  return (
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
        <li><NavLink to="/about">{texts[language][0]}</NavLink></li>
        <li><NavLink to="/services">{texts[language][1]}</NavLink></li>
        <li><NavLink to="/testimonials">{texts[language][2]}</NavLink></li>
        <li><NavLink to="/showcases">{texts[language][3]}</NavLink></li>
        <li><NavLink to="/contact">{texts[language][4]}</NavLink></li>
      </ul>
    </div>
    <p>&copy; {new Date().getFullYear()} O.C. Dental Implants</p>
    <p>Contact us at: oana.teca@gmail.com</p>
  </footer>
);
}

export default Footer;
