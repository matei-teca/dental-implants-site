import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
import "./styles/TestimonialsSection.css";

const texts = {
  en: [{
    title: "What Our Patients Say",
    description: "Discover the experiences of our satisfied patients.",
  },
  {
    testimonial: '"Dr. Curca transformed my life! Her precision and care exceeded all expectations, and I am beyond grateful." - Patient A'
  },
  {
    testimonial: `"The attention to detail was impeccable. I feel confident with my smile thanks to Dr. Curca's expertise." - Patient B`
  },
  {
    testimonial: '"From start to finish, the process was smooth and comfortable. Highly recommend to anyone needing implants!" - Patient C'
  }
  ],

  de: [{
    title: "Wiederherstellung des Lächelns mit Präzisionszahnimplantaten. Lassen Sie uns das Lächeln Ihrer Patienten zaubern.",
    description: "Hier beginnt Ihre Lösung für Präzisionszahnimplantate.",
  },
  {
    testimonial: '"Dr. Curca hat mein Leben verändert! Ihre Präzision und Sorgfalt übertrafen alle Erwartungen und ich bin überaus dankbar." - Patient A'
  },
  {
    testimonial: `"Die Liebe zum Detail war tadellos. Dank Dr. Curcas Fachwissen fühle ich mich mit meinem Lächeln sicher." - Patient B`
  },
  {
    testimonial: '"Der Prozess verlief von Anfang bis Ende reibungslos und komfortabel. Ich kann es jedem wärmstens empfehlen, der Implantate benötigt!" – Patient C'
  }
  ],
};

const TestimonialsSection = () => {
  const { language } = useLanguage();

  return (
  <section className="testimonials-section">

      <section className="hero-section">
      <Link to="/testimonials"><h1>{texts[language][0].title}</h1></Link>
        <p>{texts[language][0].description}</p>
      </section>

      <section className="testimonials-content">
        <div className="testimonial-card">
          <p className="testimonial-quote">{texts[language][1].testimonial}</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-quote">{texts[language][2].testimonial}</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-quote">{texts[language][3].testimonial}</p>
        </div>
      </section>
  </section>

);}

export default TestimonialsSection;
