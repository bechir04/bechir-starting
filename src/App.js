import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';

// Public Pages
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

// Admin Pages
import Dashboard from './admin/Dashboard/Dashboard';
import ManageNews from './admin/manageNews/ManageNews';
import ManageEvents from './admin/ManageEvents/ManageEvents';
import ManageAthletes from './admin/ManageAthlete/ManageAthlete';
import ManagePartners from './admin/managePartners/ManagePartners';
import ManageCarousel from './admin/manageCarousel/ManageCarousel';
import ManageGallery from './admin/manageGallery/ManageGallery';
import ManageMembership from './admin/manageMembership/ManageMembership';
import ManageContact from './admin/manageContact/ManageContact';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Public Routes */}
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
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/manage-news" element={<ManageNews />} />
        <Route path="/admin/manage-events" element={<ManageEvents />} />
        <Route path="/admin/manage-athletes" element={<ManageAthletes />} />
        <Route path="/admin/manage-partners" element={<ManagePartners />} />
        <Route path="/admin/manage-carousel" element={<ManageCarousel />} />
        <Route path="/admin/manage-gallery" element={<ManageGallery />} />
        <Route path="/admin/manage-membership" element={<ManageMembership />} />
        <Route path="/admin/manage-contact" element={<ManageContact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
