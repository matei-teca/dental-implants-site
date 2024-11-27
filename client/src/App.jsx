import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/secondary/ServicePage';
import TestimonialsPage from './pages/TestimonialsPage';
import Contact from './pages/ContactPage';
import ShowCasesPage from './pages/ShowCasesPage';
import Testing from './pages/Testing';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Router>
      <div>
        <Header />
        <button onClick={toggleLanguage} className='toggle-language-bttn'>
          {language === 'en' ? 'Switch to Deutsch' : 'Wechseln Sie zu Englisch'}
        </button>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcases" element={<ShowCasesPage />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
