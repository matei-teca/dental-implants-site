import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/">
        <img
          src="https://static.thenounproject.com/png/610387-200.png"
          alt="Home Icon"
          style={{ width: "20px", marginRight: "10px" }}
        />
        O.C. Dental Implants
      </Link>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/showcases">ShowCases</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
