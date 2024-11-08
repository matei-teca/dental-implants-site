import React from "react";
import "./styles/ContactPage.css";
import Header from "../components/Header";

const ContactPage = () => (
  <div className="contact-page">
    <Header />

    <section className="contact-header">
      <h1>Contact Us</h1>
      <p>We're here to answer any questions and help you start your journey to a healthier smile.</p>
    </section>

    <section className="contact-info">
      <h2>Get in Touch with Dr. Oana Curca Directly</h2>
      <p><strong>Phone:</strong> <a href="tel:+5555555555">(555) 555-5555</a></p>
      <p><strong>Email:</strong> <a href="mailto:oana.curca@example.com">oana.curca@example.com</a></p>
    </section>

    <section className="contact-form-section">
    <h2>Or complete the form for an collaboration appointment</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Full Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="contact-submit-button">Send Message</button>
      </form>
    </section>
  </div>
);

export default ContactPage;
