import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user has scrolled to the bottom
      if (scrollTop >= documentHeight - 50) {  // Adding a small threshold
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : 'hidden'}`}>
      <span>© {new Date().getFullYear()} Club d'Athlétisme. Tous droits réservés.</span>
      <ul className="social-links">
        <li><a href="https://www.facebook.com/startingclubnabeul">Facebook</a></li>
        <li><a href="https://instagram.com/193_fx" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
