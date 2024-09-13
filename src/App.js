import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './redux/store';
import Layout from './components/Layout'; // Layout component
import 'antd/dist/reset.css';
// Public Pages
import HomePage from './pages/homePage/HomePage';
import NewsPage from './pages/newsPage/NewsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import PresidentMessagePage from './pages/presidentMessagePage/PresidentMessagePage';
import AthletesPage from './pages/athletePage/AthletesPage';
import AthleteProfile from './pages/athletePage/AthleteProfile';
import EventsPage from './pages/eventPage/EventsPage';
import GalleryPage from './pages/galleryPage/GalleryPage';
import MembershipPage from './pages/membershipPage/MembershipPage';
import PartnersPage from './pages/partnersPage/PartnersPage';
import ContactPage from './pages/contactPage/ContactPage';

// Import your CRUD Dashboard
import Dashboard from './components/dashbord/Dashboard'; 
import { Login, Signup, PublicRoute } from './components';

// Import CRUD Pages
import EventCRUD from './components/crudPages/EventCRUD';
import AnnouncementCRUD from './components/crudPages/AnnouncementCRUD';

// Import CSS
import './App.css';

const theme = {
  token: {
    colorPrimary: '#1DA57A', // Teal
    colorSecondary: '#FF7A00', // Orange
    colorLink: '#1DA57A', // Teal for links
    colorText: '#333', // Dark grey text
    colorTextSecondary: '#666', // Lighter grey text
    colorBackground: '#FAFAFA', // Light background
    colorBorder: '#E8E8E8', // Light border
    // Additional theme customization here
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}> {/* Apply Ant Design theme */}
        <Router>
          <Layout>
            <Routes>
              {/* Auth-related routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Public Pages */}
              <Route path="/news" element={<NewsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/president-message" element={<PresidentMessagePage />} />
              <Route path="/athletes" element={<AthletesPage />} />
              <Route path="/athletes/:id" element={<AthleteProfile />} />
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
          </Layout>
        </Router>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
