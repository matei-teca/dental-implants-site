import React from 'react';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <header className="header">
      <div className="logo">Dental Implants</div>
      <nav>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li><button className="cta-button">Book an Appointment</button></li>
        </ul>
      </nav>
    </header>
    <section className="hero">
      <h1>Restore the Smiles with Precision Dental Implants</h1>
      <p>Your journey to a brighter, healthier smile begins here.</p>
      <button className="hero-button">Get Started</button>
    </section>
    <section className="intro">
      <div className="intro-text">
        <h2>Meet Dr. [Name]</h2>
        <p>With over X years of experience, Dr. [Name] specializes in creating tailored solutions for dental health, focusing on implantology and patient care.</p>
      </div>
      <img src="/path-to-image.jpg" alt="Dr. [Name]" className="intro-image"/>
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
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dental Implants Clinic</p>
      <p>Contact us at: (555) 555-5555</p>
    </footer>
  </div>
);

export default LandingPage;
