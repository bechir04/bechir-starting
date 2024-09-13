import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Spin } from 'antd'; // Import Spin component
import Header from './header/Header';
import Footer from './footer/Footer';
import './Layout.css'; // Custom CSS for center positioning of spinner

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Start loading when location changes
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer when navigating
  }, [location]);

  return (
    <>
      <Header />
      {loading ? (
        <div className="loading-spinner">
          <Spin size="large" /> {/* Ant Design Spin component */}
        </div>
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
