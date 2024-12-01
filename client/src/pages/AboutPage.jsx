// AboutPage.jsx
import React from "react";
import "./styles/AboutPage.css";
import { useLanguage } from '../LanguageContext';

import aboutDoctorImg1 from '../assets/imgs/about-doctor-img1.jpg';
import aboutDoctorImg2 from '../assets/imgs/about-doctor-img2.jpg';
import aboutDoctorImg3 from '../assets/imgs/about-doctor-img3.jpg';
import aboutDoctorImg4 from '../assets/imgs/about-doctor-img4.jpg';
import bigDoctorsImage from '../assets/imgs/big-doctors-image.jpg';

const texts = {
  en: [
    {
      title: "Meet Dr. Oana Curca",
      description: "Dr. [Name] has dedicated over [X years] to advancing dental health through implantology and patient-centered care. With specialized training in dental implants, she has helped countless patients regain their smiles and confidence."
    }, {
      title: "Qualifications & Expertise",
      description: ["DDS, [University, Graduation Year]",
        "Certification in Dental Implantology from [Certification Institution]",
        "Member of [Professional Organizations]",
        "Over [X] successful implant procedures performed"]
    }, {
      title: "Patient Care Philosophy",
      description: "Dr. [Name] believes that each patient’s journey is unique and prioritizes comfort, precision, and understanding in her approach. Her goal is to ensure that every patient not only receives high-quality care but also feels informed and at ease throughout the process."
    }, {
    title: "Discover more about Dr. Oana",
  }, {
    title: "Gallery",
  },
  ],
de: [
  {
    title: "Treffen Sie Dr. Oana Curca",
    description: "Dr. [Name] widmet sich über [X Jahre] der Förderung der Zahngesundheit durch Implantologie und patientenzentrierte Pflege. Mit einer Spezialausbildung für Zahnimplantate hat sie unzähligen Patienten geholfen, ihr Lächeln und ihr Selbstvertrauen wiederzugewinnen."
  }, {
    title: "Qualifikationen und Fachwissen",
    description: ["DDS, [Universität, Abschlussjahr]",
      "Zertifizierung in Zahnimplantologie von [Zertifizierungsinstitution]",
      "Mitglied von [Berufsverbänden]",
      "Über [X] erfolgreiche Implantationsverfahren durchgeführt"]
  }, {
    title: "Philosophie der Patientenversorgung",
    description: "Dr. [Name] ist davon überzeugt, dass der Weg jedes Patienten einzigartig ist und legt bei ihrem Ansatz Wert auf Komfort, Präzision und Verständnis. Ihr Ziel ist es sicherzustellen, dass jeder Patient nicht nur eine qualitativ hochwertige Versorgung erhält, sondern sich während des gesamten Prozesses auch gut informiert und wohl fühlt."
  }, {
    title: "Erfahren Sie mehr über Dr. Oana",
  }, {
    title: "Galerie",
  },
]
}

const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <main className="about-page" role="document">
      <section className="about-hero" role="banner">
        <img
          src={aboutDoctorImg4}
          alt="Dr. [Name]"
          className="about-image"
        />
        <div className="about-text">
          <h1>{texts[language][0].title}</h1>
          <p>
            {texts[language][0].description}
          </p>
        </div>
      </section>

      <section className="about-qualifications" aria-labelledby="about-qualifications">
        <h2>{texts[language][1].title}</h2>
        <ul>
          <li>{texts[language][1].description[0]}</li>
          <li>
            {texts[language][1].description[1]}
          </li>
          <li>{texts[language][1].description[2]}</li>
          <li>{texts[language][1].description[3]}</li>
        </ul>
      </section>

      <section className="about-philosophy" aria-labelledby="about-philosophy">
        <h2>{texts[language][2].title}</h2>
        <p>
        {texts[language][2].description}
        </p>
      </section>

      <section className="about-image-section" aria-label="Doctor's Teamwork Image Section">
        <h2>{texts[language][3].title}</h2>
        <img
          src={bigDoctorsImage}
          alt="Doctor Curca working with another doctor image"
          className="discover-image"
        />
      </section>

      <section className="gallery-section" aria-labelledby="gallery-section">
        <h2>{texts[language][4].title}</h2>
        <div className="image-gallery">
          <img
            src={aboutDoctorImg1}
            alt="Image of the Doctor 1"
          />
          <img
            src={aboutDoctorImg2}
            alt="Image of the Doctor 2"
          />
          <img
            src={aboutDoctorImg3}
            alt="Image of the Doctor 3"
          />
          <img
            src={aboutDoctorImg4}
            alt="Image of the Doctor 4"
          />
        </div>
      </section>
    </main>
  );

}

export default AboutPage;
