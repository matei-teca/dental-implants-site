import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
import "./styles/Header.css";

const texts = {
  en: ["About", "Services", "Testimonials", "Showcases", "Contact", "Book an Appointment"],
  de: ["Über uns", "Leistungen", "Erfahrungsberichte", "Vitrinen", "Kontakt", "Termin vereinbaren"]
}

const Header = () => {
  const { language } = useLanguage();

  return (
  <header className="header">
    <div className="logo">
      <NavLink to="/">
        <img
          src="https://static.thenounproject.com/png/610387-200.png"
          alt="Home Icon"
          style={{ width: "20px", marginRight: "10px" }}
        />
        O.C. Dental Implants
      </NavLink>
    </div>

    <nav>
      <ul>
        <li>
          <NavLink to="/about">{texts[language][0]}</NavLink>
        </li>
        <li>
          <NavLink to="/services">{texts[language][1]}</NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">{texts[language][2]}</NavLink>
        </li>
        <li>
          <NavLink to="/showcases">{texts[language][3]}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{texts[language][4]}</NavLink>
        </li>
        <li>
          <button className="header-appointment-button">
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Appointment+with+O.C.+Dental+Implants&details=Please+confirm+the+appointment+with+our+office.&location=O.C.+Dental+Implants+Office&sf=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts[language][5]}
            </a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
);
}

export default Header;
