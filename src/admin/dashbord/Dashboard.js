// src/admin/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Ensure this CSS file exists

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-card">
        <h3>Manage Content</h3>
        <p>Manage news, events, athletes, and partners.</p>
      </div>
    </div>
  );
};

export default Dashboard;
