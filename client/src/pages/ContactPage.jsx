import React from "react";
import "./ContactPage.css";

const ContactPage = () => (
  <div className="contact-page">
    <header className="contact-header">
      <h1>Contact Us</h1>
      <p>We're here to answer any questions and help you start your journey to a healthier smile.</p>
    </header>

    <section className="contact-form-section">
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
