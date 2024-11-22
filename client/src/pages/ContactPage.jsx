import React, { useState } from "react";
import "./styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:oana.teca@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
