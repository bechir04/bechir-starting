// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import PresidentMessagePage from './pages/PresidentMessagePage';
import AthletesPage from './pages/AthletesPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import MembershipPage from './pages/MembershipPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

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
