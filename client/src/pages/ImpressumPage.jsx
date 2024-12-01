import React from 'react';
import { useLanguage } from '../LanguageContext';
import './styles/ImpressumPage.css';

const texts = {
    en: ["Contact Details", "Name", "Address", "Email", "Phone", "Professional Registration:", "VAT ID:"],
    de: ["Kontaktdaten", "Name", "Adresse", "E-Mail", "Telefon", "Berufliche Registrierung:", "USt-IdNr.:"]
  }

const ImpressumPage = () => {
    const { language } = useLanguage();

    return (
        <main role = "document">
            <section className="impressum-header" role="header">
                <h1>Impressum</h1>
                <p>Legal Notice and Contact Information</p>
            </section>
            <section className="impressum-info">
                <h2>{texts[language][0]}</h2>
                <p><strong>{texts[language][1]}</strong> [Your Full Name]</p>
                <p><strong>{texts[language][2]}</strong> [Your Address]</p>
                <p><strong>{texts[language][3]}</strong> [Your Email]</p>
                <p><strong>{texts[language][4]}</strong> [Your Phone Number]</p>
                <p><strong>{texts[language][5]}</strong> [Zahnärztekammer registration number]</p>
                <p><strong>{texts[language][6]}</strong> [Your VAT ID, if applicable]</p>
            </section>
        </main>
    );
};

export default ImpressumPage;
