import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Club d'Athlétisme</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/news">Actualités</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/president">Mot du Président</Link></li>
          <li><Link to="/athletes">Athlètes</Link></li>
          <li><Link to="/events">Événements</Link></li>
          <li><Link to="/gallery">Galerie</Link></li>
          <li><Link to="/membership">Adhésion</Link></li>
          <li><Link to="/partners">Partenaires</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
