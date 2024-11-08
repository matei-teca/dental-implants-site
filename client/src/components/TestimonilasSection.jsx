import React from "react";
import "./styles/TestimonialsSection.css";

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2>What Our Patients Say</h2>
    <div className="testimonials">
      <blockquote>
        <p>"Dr. Smith transformed my smile with incredible attention to detail!"</p>
        <cite>- Patient A</cite>
      </blockquote>
      <blockquote>
        <p>"The whole experience was seamless and professional. Highly recommend!"</p>
        <cite>- Patient B</cite>
      </blockquote>
      <blockquote>
        <p>"Fantastic care and results. I couldn't be happier with my smile!"</p>
        <cite>- Patient C</cite>
      </blockquote>
    </div>
  </section>
);

export default TestimonialsSection;
