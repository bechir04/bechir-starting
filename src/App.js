// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';
import NewsPage from './pages/newsPage/NewsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import PresidentMessagePage from './pages/presidentMessagePage/PresidentMessagePage';
import AthletesPage from './pages/athletePage/AthletesPage';
import EventsPage from './pages/eventPage/EventsPage';
import GalleryPage from './pages/galleryPage/GalleryPage';
import MembershipPage from './pages/membershipPage/MembershipPage';
import PartnersPage from './pages/partnersPage/PartnersPage';
import ContactPage from './pages/contactPage/ContactPage';

import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/president-message" element={<PresidentMessagePage />} />
        <Route path="/athletes" element={<AthletesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
