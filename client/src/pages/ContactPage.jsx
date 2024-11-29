import React, { useState } from "react";
import { useLanguage } from '../LanguageContext';
import "./styles/ContactPage.css";

const texts = {
  en: [
    {
      title: "Contact Us",
      description: "We're here to answer any questions and help you start your journey to a healthier smile."
    }, {
      title: "Get in Touch with Dr. Oana Curca Directly",
      description: ["Phone:", "Email:"]
    }, {
      title: "Or complete the form for an collaboration appointment",
      description: ["Name", "Email", "Message", "Send Message"],
      descriptionPlaceholder: ["Your Full Name", "Your Email Address", "Your Message"]
    }
  ],

  de: [
    {
      title: "Kontaktieren Sie uns",
      description: "Wir sind hier, um Ihre Fragen zu beantworten und Ihnen zu helfen, Ihre Reise zu einem gesünderen Lächeln zu beginnen."
    }, {
      title: "Kontaktieren Sie Dr. Oana Curca direkt",
      description: ["Telefon:", "E-Mail:"]
    }, {
      title: "Oder füllen Sie das Formular für einen Kollaborationstermin aus",
      description: ["Name", "E-Mail", "Nachricht", "Nachricht senden"],
      descriptionPlaceholder: ["Ihr vollständiger Name", "Ihre E-Mail-Adresse", "Ihre Nachricht"]
    }
  ]
}

const ContactPage = () => {
  const { language } = useLanguage();
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
        <h1>{texts[language][0].title}</h1>
        <p>{texts[language][0].description}</p>
      </section>

      <section className="contact-info">
        <h2>{texts[language][1].title}</h2>
        <p><strong>{texts[language][1].description[0]}</strong> <a href="tel:+5555555555">(555) 555-5555</a></p>
        <p><strong>{texts[language][1].description[1]}</strong> <a href="mailto:oana.curca@example.com">oana.curca@example.com</a></p>
      </section>

      <section className="contact-form-section">
        <h2>{texts[language][2].title}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">{texts[language][2].description[0]}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder= {texts[language][2].descriptionPlaceholder[0]}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{texts[language][2].description[1]}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder= {texts[language][2].descriptionPlaceholder[1]}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">{texts[language][2].description[2]}</label>
          <textarea
            id="message"
            name="message"
            placeholder= {texts[language][2].descriptionPlaceholder[2]}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit-button">{texts[language][2].description[3]}</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
