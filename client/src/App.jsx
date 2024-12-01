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

import ImpressumPage from './pages/ImpressumPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div lang={language} role="application">
    <Router>
      <div>
        <Header />
        <div className='toggle-language-container'>
        <button onClick={toggleLanguage} className='toggle-language-bttn'>
        </button>
        {language === 'en' ? 'EN > DE' : 'DE > EN'}
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcases" element={<ShowCasesPage />} />
          <Route path="/testing" element={<Testing />} />

          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
