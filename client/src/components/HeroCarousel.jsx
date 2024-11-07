import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import '../pages/LandingPage.css'; // Your existing styles

const HeroCarousel = () => (
  <section className="carousel">
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
    >
       <div className="carousel-slide" style={{ backgroundImage: `url('https://roger24.de/sites/default/files/userimages/doctors/oanairinacurca.jpg')` }}>
        <div className="carousel-content">
          <h1>Restore Your Smile with Precision Dental Implants</h1>
          <p>Your journey to a brighter, healthier smile begins here.</p>
          <button className="carousel-button">Get Started</button>
        </div>
      </div>

       <div className="carousel-slide" style={{ backgroundImage: `url('https://roger24.de/sites/default/files/userimages/doctors/oanairinacurca.jpg')` }}>
        <div className="carousel-content">
          <h1>Partner with Dr. [Your Mother's Name]</h1>
          <p>Providing expertise in implantology to enhance your practice and patient outcomes.</p>
          <button className="carousel-button">Learn More</button>
        </div>
      </div>

      <div className="carousel-slide" style={{ backgroundImage: `url('https://roger24.de/sites/default/files/userimages/doctors/oanairinacurca.jpg')` }}>
        <div className="carousel-content">
          <h1>Partner with Dr. [Your Mother's Name]</h1>
          <p>Providing expertise in implantology to enhance your practice and patient outcomes.</p>
          <button className="carousel-button">Learn More</button>
        </div>
      </div>
{/* 
      <div className="carousel-slide" style={{ backgroundImage: `url('https://roger24.de/sites/default/files/userimages/doctors/oanairinacurca.jpg')` }}>
        <div className="carousel-content">
          <h1>Excellence in Dental Implants</h1>
          <p>Trusted by patients and professionals alike for precision and care.</p>
          <button className="carousel-button">Book a Consultation</button>
        </div>
      </div> */}
    </Carousel>
  </section>
);

export default HeroCarousel;
