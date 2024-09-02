import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
        <span>© {new Date().getFullYear()} Club d'Athlétisme. Tous droits réservés.</span>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/startingclubnabeul">Facebook</a></li>
          <li><a href="https://instagram.com/193_fx" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
    </footer>
  );
}

export default Footer;
