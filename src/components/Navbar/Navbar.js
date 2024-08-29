// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/president-message">President's Message</Link></li>
        <li><Link to="/athletes">Athletes</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Add a link to the dashboard */}
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
