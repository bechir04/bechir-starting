import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Dashboard from './pages/admin/Dashboard';
import ManageNews from './pages/admin/ManageNews';
import ManageEvents from './pages/admin/ManageEvents';
import ManageAthletes from './pages/admin/ManageAthletes';
import ManagePartners from './pages/admin/ManagePartners';
import ManageCarousel from './pages/admin/ManageCarousel';
import ManageGallery from './pages/admin/ManageGallery';
import ManageMembership from './pages/admin/ManageMembership';
import ManageContact from './pages/admin/ManageContact';
import NotFoundPage from './pages/NotFoundPage'; // A page to handle 404 errors

const RoutesComponent = () => {
  return (
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

      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
