import React from "react";
import { NavLink } from "react-router-dom";
// import HeroCarousel from "../components/HeroCarousel";
import "./styles/LandingPage.css";
import TestimonialsSection from "../components/TestimonialsSection";
import aboutDoctorImg4 from '../assets/imgs/about-doctor-img4.jpg';
import bigDoctorsImage from '../assets/imgs/big-doctors-image.jpg';


const LandingPage = () => (
  <div className="landing-page">
    <section className="hero">
      <h1>
        Restore your Smiles with Precision Dental Implants. Let's make your
        patients' smiles.
      </h1>
      <p>Your solution to a precision dental implant begins here.</p>
      <NavLink to="/services">
        <button className="hero-button">Get Started</button>
      </NavLink>
    </section>

    <section className="cta-section" id="cta-section">
      <div className="cta-content">
        <h2>Looking to Provide Implant Solutions for Your Patients?</h2>
        <p>
          Partner with Dr. [Name] to ensure your patients receive expert care in
          dental implantology. Our service specializes in high-quality implant treatments.
        </p>
       
        <NavLink to="/contact"><button className="cta-button">Refer a Patient</button></NavLink>
      </div>
    </section>
    <section className="intro">
      <div className="intro-text">
        <h2>
          <NavLink to="/about"> Meet Dr. Oana Curca</NavLink>
        </h2>
        <p>
          With over X years of experience, Dr. [Name] specializes in creating
          tailored solutions for dental health, focusing on implantology and
          patient care.
        </p>
      </div>
      <NavLink to="/about">
        <img
          src={aboutDoctorImg4}
          alt="Dr. [Name]"
          className="intro-image"
        />{" "}
      </NavLink>
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
        <div className="card">
          <h3>Multiple Teeth Implants</h3>
          <p>For a seamless, natural-looking smile.</p>
        </div>
      </div>
    </section>

    <section className="about-image-section">
      <h2>Discover more about Dr. Oana</h2>
      <img
        src={bigDoctorsImage}
        alt="Dr. [Name] Portrait"
        className="discover-image"
      />
    </section>
    {/* <HeroCarousel /> */}

    <TestimonialsSection />
    <br/>
    <br/>

  </div>
);

export default LandingPage;
