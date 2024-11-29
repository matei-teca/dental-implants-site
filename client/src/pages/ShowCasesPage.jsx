import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import './styles/ShowCasesPage.css';

import placeholder1 from '../assets/imgs/big-doctors-image.jpg';
// import placeholder2 from '../assets/imgs/about-doctor-img2.jpg';
// import placeholder3 from '../assets/imgs/about-doctor-img3.jpg';

const texts = {
  en: "Showcases",
  de: "Vitrinen"
}

const ShowCasesPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const cases = { en: [
    {
      title: 'Case 1',
      description: 'This is the first case description.',
      images: [placeholder1, placeholder1, placeholder1, placeholder1, placeholder1],
      details: 'Additional details about Case 1.',
      testimonial: "“Dr. [Name] did an amazing job! I feel confident and my smile looks great.” - Patient A"
    },
    {
      title: 'Case 2',
      description: 'This is the second case description.',
      images: [placeholder1, placeholder1, placeholder1],
      details: 'Additional details about Case 2.',
      testimonial: "“Dr. [Name] did an amazing job! I feel confident and my smile looks great.” - Patient B"
    },
    {
      title: 'Case 3',
      description: 'This is the third case description.',
      images: [placeholder1, placeholder1, placeholder1, placeholder1, placeholder1],
      details: 'Additional details about Case 3.',
      testimonial: "“Dr. [Name] did an amazing job! I feel confident and my smile looks great.” - Patient C"
    },
    // Add more cases as needed
  ],

  de: [
    {
      title: 'Fall 1',
      description: 'Dies ist die erste Fallbeschreibung.',
      images: [placeholder1, placeholder1, placeholder1, placeholder1, placeholder1],
      details: 'Weitere Details zu Fall 1.',
      testimonial: "„Dr. [Name] hat einen tollen Job gemacht! Ich fühle mich selbstbewusst und mein Lächeln sieht großartig aus.“ - Patient A"
    },
    {
      title: 'Fall 2',
      description: 'Dies ist die zweite Fallbeschreibung.',
      images: [placeholder1, placeholder1, placeholder1],
      details: 'Weitere Details zu Fall 2.',
      testimonial: "Dr. [Name] hat einen tollen Job gemacht! Ich fühle mich selbstbewusst und mein Lächeln sieht großartig aus.“ - Patient B"
    },
    {
      title: 'Fall 3',
      description: 'Dies ist die dritte Fallbeschreibung.',
      images: [placeholder1, placeholder1, placeholder1, placeholder1, placeholder1],
      details: 'Weitere Details zu Fall 3.',
      testimonial: "Dr. [Name] hat einen tollen Job gemacht! Ich fühle mich selbstbewusst und mein Lächeln sieht großartig aus.“ - Patient C"
    },
  ]
}

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="showcases-page">
      <h1>{texts[language]}</h1>
      <div className="case-cards">
        {cases[language].map((caseItem, index) => (
          <div className="case-card" key={index}>
            <h2>{caseItem.title}</h2>
            <p>{caseItem.description}</p>
            <div className="image-scroll-container">
              {caseItem.images.map((image, imgIndex) => (
                <img
                  src={image}
                  alt={`${caseItem.title} - ${imgIndex + 1}`}
                  className="case-image"
                  key={imgIndex}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <p className="case-details">{caseItem.details}</p>
            <blockquote className="case-testimonial">
              {caseItem.testimonial}
            </blockquote>
          </div>
        ))}
      </div>

      {/* Lightbox for displaying selected image */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="lightbox-image" />
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCasesPage;
