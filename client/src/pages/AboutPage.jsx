// AboutPage.jsx
import React from "react";
import "./styles/AboutPage.css";
import aboutDoctorImg1 from '../assets/imgs/about-doctor-img1.jpg';
import aboutDoctorImg2 from '../assets/imgs/about-doctor-img2.jpg';
import aboutDoctorImg3 from '../assets/imgs/about-doctor-img3.jpg';
import aboutDoctorImg4 from '../assets/imgs/about-doctor-img4.jpg';
import bigDoctorsImage from '../assets/imgs/big-doctors-image.jpg';

const AboutPage = () => (
  <div className="about-page">
    <section className="about-hero">
      <img
        src={aboutDoctorImg4}
        alt="Dr. [Name]"
        className="about-image"
      />
      <div className="about-text">
        <h1>Meet Dr. Oana Curca </h1>
        <p>
          Dr. [Name] has dedicated over [X years] to advancing dental health
          through implantology and patient-centered care. With specialized
          training in dental implants, she has helped countless patients regain
          their smiles and confidence.
        </p>
      </div>
    </section>

    <section className="about-qualifications">
      <h2>Qualifications & Expertise</h2>
      <ul>
        <li>DDS, [University, Graduation Year]</li>
        <li>
          Certification in Dental Implantology from [Certification Institution]
        </li>
        <li>Member of [Professional Organizations]</li>
        <li>Over [X] successful implant procedures performed</li>
      </ul>
    </section>

    <section className="about-philosophy">
      <h2>Patient Care Philosophy</h2>
      <p>
        Dr. [Name] believes that each patient’s journey is unique and
        prioritizes comfort, precision, and understanding in her approach. Her
        goal is to ensure that every patient not only receives high-quality care
        but also feels informed and at ease throughout the process.
      </p>
    </section>

    <section className="about-image-section">
      <h2>Discover more about Dr. Oana</h2>
      <img
        src={bigDoctorsImage}
        alt="Dr. [Name] Portrait"
        className="discover-image"
      />
    </section>

    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="image-gallery">
        <img
          src={aboutDoctorImg1}
          alt="Dr. [Name] 1"
        />
        <img
          src={aboutDoctorImg2}
          alt="Dr. [Name] 2"
        />
        <img
          src={aboutDoctorImg3}
          alt="Dr. [Name] 3"
        />
        <img
          src={aboutDoctorImg4}
          alt="Dr. [Name] 4"
        />
      </div>
    </section>
  </div>
);

export default AboutPage;
