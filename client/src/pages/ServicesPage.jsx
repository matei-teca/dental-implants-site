import React from "react";
import "./styles/ServicesPage.css";

const services = [
  {
    title: "Single Tooth Implants",
    description: "Reliable solutions for replacing individual missing teeth with natural results.",
  },
  {
    title: "Multiple Teeth Implants",
    description: "Solutions for restoring multiple missing teeth with a seamless, long-lasting finish.",
  },
  {
    title: "Full Arch Restoration",
    description: "Complete arch replacements to restore full functionality and aesthetics.",
  },
  {
    title: "Bone Grafting",
    description: "Pre-surgical procedures to ensure a solid foundation for implant placement.",
  },
  {
    title: "Sinus Lifts",
    description: "Advanced procedures to enhance upper jaw bone structure for secure implants.",
  },
  {
    title: "Immediate Load Implants",
    description: "Allowing patients to receive temporary crowns on the same day as implant placement.",
  },
];

const ServicesPage = () => (
  <div className="services-page">
    <h1>Our Implantology Services</h1>
    <p>Specialized implant solutions designed for dental practices looking to provide high-quality care to their patients.</p>

    <div className="service-cards">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesPage;
