import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Testing.css";

const Testing = () => {
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
    <div className="testing-page">
      <section className="testing-section1">
        Section 1
        <div onClick={scrollToAboutHero}>Scroll to About Hero</div>
      </section>

      <section className="testing-section2" id="testing-section2">
        Section 2
      </section>
    </div>
  );
};

export default Testing;
