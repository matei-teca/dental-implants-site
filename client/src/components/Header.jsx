import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => (
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
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li>
        <li>
          <NavLink to="/showcases">ShowCases</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <button className="cta-button">
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Appointment+with+O.C.+Dental+Implants&details=Please+confirm+the+appointment+with+our+office.&location=O.C.+Dental+Implants+Office&sf=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Appointment
            </a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
