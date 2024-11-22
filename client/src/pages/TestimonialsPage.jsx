import React from "react";
import "./styles/TestimonialsPage.css";

const TestimonialsPage = () => 
  <div className="testimonials-page">
    <section className="hero-section">
      <h1>What Our Patients Say</h1>
      <p>Your smile, our pride. Discover the experiences of our satisfied patients.</p>
    </section>

    <section className="testimonials-content">
      <div className="testimonial-card">
        <p className="testimonial-quote">"Dr. Curca transformed my life! Her precision and care exceeded all expectations, and I am beyond grateful." - Patient A</p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-quote">"The attention to detail was impeccable. I feel confident with my smile thanks to Dr. Curca's expertise." - Patient B</p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-quote">"From start to finish, the process was smooth and comfortable. Highly recommend to anyone needing implants!" - Patient C</p>
      </div>
    </section>
  </div>
;

export default TestimonialsPage;
