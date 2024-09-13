import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Public Pages
import {HomePage , AboutPage, PresidentMessagePage ,AthletePage ,EventsPage ,GalleryPage ,MembershipPage,PartnersPage ,ContactPage, AnnouncementPage} from "./pages/index"
import { Header ,Login, Signup, AdminRoute , PublicRoute , EventDetails, AthleteProfile , Footer} from "./components/index";

import store from "./redux/store";

import "./App.css";
import { Provider } from "react-redux";
import DashboardPage from "./pages/admin/DashboardPage";
import AthleteDetails from "./components/adminDashboard/athleteManagement/athlete-details";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* routes for all authenticated users */}
          <Route path="/news" element={<AnnouncementPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/president-message" element={<PresidentMessagePage />} />
          <Route path="/athletes" element={<AthletePage />} />
          <Route path="/athlete-details/:athleteId" element={<AthleteProfile />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event-details/:eventId" element={<EventDetails />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* routes for admins only */}
          <Route path="/dashboard/*" element={
              <AdminRoute>
                <DashboardPage />
              </AdminRoute>
              }
          />
          <Route path="/admin/athlete-details/:athleteId" element={<AthleteDetails />} />

          {/* route for non authenticated users */}
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
