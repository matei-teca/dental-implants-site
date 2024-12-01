import React from 'react';
import { useLanguage } from '../LanguageContext';
import './styles/PrivacyPolicyPage.css';

const texts = {
    en: [{
        title: "Privacy Policy",
        description: "Your data privacy is important to us"
    }, {
        title: "Introduction",
        description: "We value your privacy and ensure that all personal data collected on this website is handled in compliance with GDPR regulations."
    }, {
        title: "What Data We Collect",
        description: ["Names and contact details (email, phone, etc.)", "Usage data, such as browsing behavior on our website", "Any information you voluntarily submit via forms"]
    }, {
        title: "How We Use Your Data",
        description:["We use the collected data to:", "Provide and improve our services", "Respond to inquiries and provide support", "Comply with legal obligations"]
    }, 
],

    de: [
        {
            title: "Datenschutzrichtlinie",
            description: "Ihr Datenschutz ist uns wichtig"
        }, {
            title: "Einführung",
            description: "Wir legen Wert auf Ihre Privatsphäre und stellen sicher, dass alle auf dieser Website erfassten personenbezogenen Daten in Übereinstimmung mit den DSGVO-Vorschriften behandelt werden."
        }, {
            title: "Welche Daten wir sammeln",
            description: ["Namen und Kontaktdaten (E-Mail, Telefon usw.)", "Nutzungsdaten, wie z. B. das Surfverhalten auf unserer Website", "Alle Informationen, die Sie freiwillig über Formulare übermitteln"]
        }, {
            title: "Wie wir Ihre Daten verwenden",
            description:["Wir verwenden die gesammelten Daten, um:", "Bereitstellung und Verbesserung unserer Dienstleistungen", "Beantworten Sie Anfragen und leisten Sie Support", "Halten Sie gesetzliche Verpflichtungen ein"]
        }, 
    ]
}
  
const PrivacyPolicyPage = () => {
    const { language } = useLanguage();

    return (
        <main role="document">
            <section className="privacy-header" role="banner">
                <h1>{texts[language][0].title}</h1>
                <p>{texts[language][0].description}</p>
            </section>
            <div className="privacy-info">
                <section>
                <h2>{texts[language][1].title}</h2>
                <p>
                   {texts[language][1].description}
                </p>
                </section>

                <section>
                <h2>{texts[language][2].title}</h2>
                <ul>
                    <li>{texts[language][2].description[0]}</li>
                    <li>{texts[language][2].description[1]}</li>
                    <li>{texts[language][2].description[2]}</li>
                </ul>
                </section>

                <section>
                <h2>{texts[language][3].title}</h2>
                <p>
                    {texts[language][3].description[0]}
                </p>
                <ul>
                    <li>{texts[language][3].description[1]}</li>
                    <li>{texts[language][3].description[2]}</li>
                    <li>{texts[language][3].description[3]}</li>
                </ul> 
                </section>

            </div>
        </main>
    );
};

export default PrivacyPolicyPage;
