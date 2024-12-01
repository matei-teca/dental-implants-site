import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
import "./styles/ServicesPage.css";

const texts = {
  en: [
    {
      title: "Our Implantology Services",
      description: "Specialized implant solutions designed for dental practices looking to provide high-quality care to their patients."
    }
  ],

  de: [
    {
      title: "Unsere Implantologie-Dienstleistungen",
      description: "Spezialisierte Implantatlösungen für Zahnarztpraxen, die ihren Patienten eine qualitativ hochwertige Versorgung bieten möchten."
    }
  ]
}

const services = {
  
  en: [
  {
    id: "single-tooth-implants",
    title: "Single Tooth Implants",
    description: "Reliable solutions for replacing individual missing teeth with natural results.",
  },
  {
    id: "multiple-teeth-implants",
    title: "Multiple Teeth Implants",
    description: "Solutions for restoring multiple missing teeth with a seamless, long-lasting finish.",
  },
  {
    id: "full-arch-restoration",
    title: "Full Arch Restoration",
    description: "Complete arch replacements to restore full functionality and aesthetics.",
  },
  {
    id: "bone-grafting",
    title: "Bone Grafting",
    description: "Pre-surgical procedures to ensure a solid foundation for implant placement.",
  },
  {
    id: "sinus-lifts",
    title: "Sinus Lifts",
    description: "Advanced procedures to enhance upper jaw bone structure for secure implants.",
  },
  {
    id: "immediate-load-implants",
    title: "Immediate Load Implants",
    description: "Allowing patients to receive temporary crowns on the same day as implant placement.",
  },
],


de: [
  {
    id: "single-tooth-implants",
    title: "Einzelzahnimplantate",
    description: "Zuverlässige Lösungen für den natürlichen Ersatz einzelner fehlender Zähne.",
  },
  {
    id: "multiple-teeth-implants",
    title: "Mehrere Zahnimplantate",
    description: "Lösungen zur Wiederherstellung mehrerer fehlender Zähne mit einem nahtlosen, langlebigen Finish.",
  },
  {
    id: "full-arch-restoration",
    title: "Vollständige Wiederherstellung des Zahnbogens",
    description: "Kompletter Bogenersatz zur Wiederherstellung der vollen Funktionalität und Ästhetik.",
  },
  {
    id: "bone-grafting",
    title: "Knochentransplantation",
    description: "Präoperative Verfahren zur Gewährleistung einer soliden Grundlage für die Implantatinsertion.",
  },
  {
    id: "sinus-lifts",
    title: "Sinuslifte",
    description: "Fortschrittliche Verfahren zur Verbesserung der Knochenstruktur des Oberkiefers für sichere Implantate.",
  },
  {
    id: "immediate-load-implants",
    title: "Sofortlastimplantate",
    description: "Dadurch können Patienten noch am selben Tag, an dem das Implantat eingesetzt wird, provisorische Kronen erhalten.",
  },
],

}

const ServicesPage = () => {
  const { language } = useLanguage();

  return (
    <main className="services-page" role="document">
      <h1 role="banner">{texts[language][0].title}</h1>
      <p>{texts[language][0].description}</p>
  
      <div className="service-cards" aria-labelledby="service-cards">
        {services[language].map((service) => (
          <Link 
            key={service.id} 
            to={`/services/${service.id}`} 
            state={service} 
            className="service-card-link"
          >
            <div className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
  
}
  
 
export default ServicesPage;
