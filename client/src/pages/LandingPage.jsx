import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLanguage } from '../LanguageContext';

// import HeroCarousel from "../components/HeroCarousel";
import "./styles/LandingPage.css";
import TestimonialsSection from "../components/TestimonialsSection";
import aboutDoctorImg4 from '../assets/imgs/about-doctor-img4.jpg';
import bigDoctorsImage from '../assets/imgs/big-doctors-image.jpg';

const texts = {
  en: [{
    title: "Restoring Smiles with Precision Dental Implants. Let's make your patients' smiles.",
    description: 'Your solution to precision dental implants begins here.',
  }],
  de: [{
    title: 'Willkommen auf unserer Website!',
    description: 'Entdecken Sie unsere Dienstleistungen und Angebote.',
  }],
};

const services = [
  {
    id: "single-tooth-implants",
    title: "Single Tooth Implants",
    description: "Reliable solutions for replacing individual missing teeth with natural results.",
  },
  {
    id: "multiple-teeth-implants",
    title: "Multiple Teeth Implants",
    description: "Solutions for restoring multiple missing teeth with a seamless, long-lasting finish.",
  },
  {
    id: "full-arch-restoration",
    title: "Full Arch Restoration",
    description: "Complete arch replacements to restore full functionality and aesthetics.",
  },
];

const LandingPage = () => {

  const { language } = useLanguage();

  const navigate = useNavigate();

  const scrollToAboutHero = () => {
    navigate("/about"); // Navigate to AboutPage
    setTimeout(() => {
      const section = document.querySelector(".about-hero");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Allow time for the navigation to complete
  };

  return (

    <div className="landing-page">
      <section className="hero">
        <h1>
        {texts[language][0].title}
        </h1>
        <p>{texts[language][0].description}</p>
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
          <h2 onClick={scrollToAboutHero} style={{cursor: "pointer"}}>Meet Dr. Oana Curca</h2>
          <p>
            With over X years of experience, Dr. [Name] specializes in creating
            tailored solutions for dental health, focusing on implantology and
            patient care.
          </p>
        </div>
          <img
            src={aboutDoctorImg4}
            alt="Dr. [Name]"
            className="intro-image"
            onClick={scrollToAboutHero}
            style={{cursor: "pointer"}}
          />{" "}
      </section>

      <section className="services">
        <NavLink to="/services">
           <h2>Our Services</h2>
        </NavLink>
        <div className="service-cards">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              state={service}
              className="card"
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-image-section">
        <NavLink to="/about">
           <h2>Discover more about Dr. Oana</h2>
        </NavLink>
        <img
          src={bigDoctorsImage}
          alt="Dr. [Name] Portrait"
          className="discover-image"
        />
      </section>
      {/* <HeroCarousel /> */}

      <div style = {{marginBlock: "3rem"}}>
      <TestimonialsSection />
      </div>

    </div>
  );
}

export default LandingPage;
