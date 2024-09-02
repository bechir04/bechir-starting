import React, { useState } from "react";
import { Button } from 'antd';
import { useNavigate , Link} from 'react-router-dom';
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('./login');
  };

  return (
    <header className="header">
      <h2 className="header-left"> Club d'Athltisme</h2>
      
      
      <div className="header-right">

        <Button className="btn-login" onClick={handleLoginClick}>Login</Button>
        
        <button className="menu-button" >
          <div className="menu-icon"></div>
        </button>
        
        <nav>
          <ul>
              <li><Link className='navlinks' to='/'>Home</Link></li>
              <li><Link className='navlinks' to='/news'>Acutalité</Link></li>
              <li><Link className='navlinks' to='/about'>À Propos</Link></li>
              <li><Link className='navlinks' to='/president-message'>Mot du Président</Link></li>
              <li><Link className='navlinks' to='/athletes'>Athlètes</Link></li>
              <li><Link className='navlinks' to='/events'>Événements</Link></li>
              <li><Link className='navlinks' to='/gallery'>Galerie</Link></li>
              <li><Link className='navlinks' to='/'>Adhésion</Link></li>
              <li><Link className='navlinks' to='/'>Blog </Link></li>
          </ul>
      </nav> 
      </div>
    </header>
  );
}

export default Header;
