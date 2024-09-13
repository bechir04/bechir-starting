import React, { useState } from "react";
import { Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <div className="header-left">
        <h2>Club d'Athlétisme</h2>
      </div>

      <div className="header-right">
        <Button className="btn-login" onClick={() => navigate('./login')}>
          Login
        </Button>
        <button className="menu-button" onClick={toggleMenu}>
          <MenuOutlined className="menu-icon" />
        </button>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link className='navlinks' to='/'>Home</Link></li>
          <li><Link className='navlinks' to='/news'>Actualité</Link></li>
          <li><Link className='navlinks' to='/about'>À Propos</Link></li>
          <li><Link className='navlinks' to='/president-message'>Mot du Président</Link></li>
          <li><Link className='navlinks' to='/athletes'>Athlètes</Link></li>
          <li><Link className='navlinks' to='/events'>Événements</Link></li>
          <li><Link className='navlinks' to='/gallery'>Galerie</Link></li>
          <li><Link className='navlinks' to='/dashboard'>Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
