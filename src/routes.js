import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/president" component={PresidentMessagePage} />
        <Route path="/athletes" component={AthletesPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/membership" component={MembershipPage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
