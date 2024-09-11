import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Public Pages
import HomePage from "./pages/homePage/HomePage";
import NewsPage from "./pages/newsPage/NewsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import PresidentMessagePage from "./pages/presidentMessagePage/PresidentMessagePage";
import AthletesPage from "./pages/athletePage/AthletesPage";
import EventsPage from "./pages/eventPage/EventsPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import MembershipPage from "./pages/membershipPage/MembershipPage";
import PartnersPage from "./pages/partnersPage/PartnersPage";
import ContactPage from "./pages/contactPage/ContactPage";

// Import your CRUD Dashboard
import Dashboard from "./components/dashbord/Dashboard"; 
import { Login, Signup, PublicRoute } from "./components";

// Import CRUD Pages
import EventCRUD from "./components/crudPages/EventCRUD";
import AnnouncementCRUD from "./components/crudPages/AnnouncementCRUD";

import store from "./redux/store";

import "./App.css";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          {/* Auth-related routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Public Pages */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/president-message" element={<PresidentMessagePage />} />
          <Route path="/athletes" element={<AthletesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Dashboard and its nested routes */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* CRUD Pages */}
          <Route path="/event-crud" element={<EventCRUD />} />
          <Route path="/announcement-crud" element={<AnnouncementCRUD />} />

          {/* Home Page (Public Route) */}
          <Route path="/" element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
