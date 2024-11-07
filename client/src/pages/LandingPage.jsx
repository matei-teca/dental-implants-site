import React from "react";
import { Link } from "react-router-dom";
import HeroCarousel from '../components/HeroCarousel';
import "./LandingPage.css";
import Header from "../components/Header";

const LandingPage = () => (
  <div className="landing-page">
    
    <Header />

    <section className="hero">
      <h1>Restore your Smiles with Precision Dental Implants. Let's make your patients smiles.</h1>
      <p>Your journey to a brighter, healthier smile begins here.</p>
      <button className="hero-button">Get Started</button>
    </section>

    <section className="cta-section">
      <div className="cta-content">
        <h2>Looking to Provide Implant Solutions for Your Patients?</h2>
        <p>
          Partner with Dr. [Name] to ensure your patients receive expert care in
          dental implantology. Our service specializes in seamless patient
          referrals and high-quality implant treatments.
        </p>
        <button className="cta-button">Refer a Patient</button>
      </div>
    </section>
    <section className="intro">
      <div className="intro-text">
        <h2><Link to="/about"> Meet Dr. Oana Curca</Link></h2>
        <p>
          With over X years of experience, Dr. [Name] specializes in creating
          tailored solutions for dental health, focusing on implantology and
          patient care.
        </p>
      </div>
      <Link to="/about"><img src="https://scontent.fotp7-2.fna.fbcdn.net/v/t1.18169-9/11226_10151311438532971_1775624136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEHhUjXrDCNFHD1To8ffpasg2v1g7OpqF-Da_WDs6moX14TdbXffqdLgyu6OrJKztSnT_NDkAiKAxUd_H-ymjeh&_nc_ohc=Evm4TPjmVXcQ7kNvgGRbRvd&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&oh=00_AYDKe0ej27ySPQnTu-s2DyWDzJnHb4HbQQDUx5Jnley8pA&oe=67545A70" alt="Dr. [Name]" className="intro-image" />      </Link>
    </section>
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Single Tooth Implants</h3>
          <p>Efficient and lasting solution for missing teeth.</p>
        </div>
        <div className="card">
          <h3>Multiple Teeth Implants</h3>
          <p>For a seamless, natural-looking smile.</p>
        </div>
      </div>
    </section>

    <HeroCarousel />

    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dental Implants Clinic</p>
      <p>Contact us at: (555) 555-5555</p>
    </footer>
  </div>
);

export default LandingPage;
