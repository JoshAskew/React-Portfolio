import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li className={activeSection === 'AboutMe' ? 'active' : ''}>
          <Link to="/about" onClick={() => { setActiveSection('AboutMe'); setMenuOpen(false); }}>About Me</Link>
        </li>
        <li className={activeSection === 'Portfolio' ? 'active' : ''}>
          <Link to="/portfolio" onClick={() => { setActiveSection('Portfolio'); setMenuOpen(false); }}>Portfolio</Link>
        </li>
        <li className={activeSection === 'Contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => { setActiveSection('Contact'); setMenuOpen(false); }}>Contact</Link>
        </li>
        <li className={activeSection === 'Resume' ? 'active' : ''}>
          <Link to="/resume" onClick={() => { setActiveSection('Resume'); setMenuOpen(false); }}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;