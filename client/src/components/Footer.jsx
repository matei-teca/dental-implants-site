
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => (


<footer className="footer">
<p>&copy; {new Date().getFullYear()} Dental Implants Clinic</p>
<p>Contact us at: (555) 555-5555</p>
</footer>

);

export default Footer;