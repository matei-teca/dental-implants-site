import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/ServicePage.css";

const ServicePage = () => {
  const location = useLocation();
  const service = location.state;

  if (!service) {
    return <p>Service details not found. Please go back and select a service.</p>;
  }

  return (
    <div className="service-page">
      <h1>{service.title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel risus ac quam
        faucibus gravida. Proin vitae nisl vehicula, fermentum arcu vel, consectetur lacus.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Suspendisse potenti. Maecenas nec nulla nec felis convallis accumsan.
      </p>
      <h3>Highlights of This Service:</h3>
      <ul>
        <li>Advanced techniques for optimal results.</li>
        <li>Customized solutions tailored to individual needs.</li>
        <li>High success rate with long-term benefits.</li>

        <li><strong>{service.description}</strong></li>
      </ul>
      <p>
        For more information, feel free to contact us or schedule a consultation to explore how
        this service can meet your specific needs.
      </p>
      <NavLink to="/services">Back to Services</NavLink>
    </div>
  );
};

export default ServicePage;
