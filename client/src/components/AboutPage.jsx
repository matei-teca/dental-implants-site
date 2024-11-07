// AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
  <div className="about-page">
    <section className="about-hero">
      <img 
        src="https://scontent.fotp7-2.fna.fbcdn.net/v/t1.18169-9/11226_10151311438532971_1775624136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEHhUjXrDCNFHD1To8ffpasg2v1g7OpqF-Da_WDs6moX14TdbXffqdLgyu6OrJKztSnT_NDkAiKAxUd_H-ymjeh&_nc_ohc=Evm4TPjmVXcQ7kNvgGRbRvd&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&oh=00_AYDKe0ej27ySPQnTu-s2DyWDzJnHb4HbQQDUx5Jnley8pA&oe=67545A70"
        alt="Dr. [Name]"
        className="about-image"
      />
      <div className="about-text">
        <h1>Meet Dr. [Your Mother's Name]</h1>
        <p>Dr. [Name] has dedicated over [X years] to advancing dental health through implantology and patient-centered care. With specialized training in dental implants, she has helped countless patients regain their smiles and confidence.</p>
      </div>
    </section>

    <section className="about-qualifications">
      <h2>Qualifications & Expertise</h2>
      <ul>
        <li>DDS, [University, Graduation Year]</li>
        <li>Certification in Dental Implantology from [Certification Institution]</li>
        <li>Member of [Professional Organizations]</li>
        <li>Over [X] successful implant procedures performed</li>
      </ul>
    </section>

    <section className="about-philosophy">
      <h2>Patient Care Philosophy</h2>
      <p>
        Dr. [Name] believes that each patient’s journey is unique and prioritizes comfort, precision, and understanding in her approach. Her goal is to ensure that every patient not only receives high-quality care but also feels informed and at ease throughout the process.
      </p>
    </section>

    <section className="about-testimonials">
      <h2>What Patients Say</h2>
      <blockquote>"Dr. [Name] restored my smile beyond what I could have imagined. Her care and attention to detail made all the difference!" - Patient A</blockquote>
      <blockquote>"I felt confident and comfortable throughout the entire process. Dr. [Name] is truly skilled in her craft." - Patient B</blockquote>
    </section>
  </div>
);

export default AboutPage;
