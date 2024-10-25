import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ activeSection, setActiveSection }) {
  return (
    <nav>
      <ul>
        <li id='nav-links'className={activeSection === 'AboutMe' ? 'active' : ''}>
          <Link to="/about" onClick={() => setActiveSection('AboutMe')}>About Me</Link>
        </li>
        <li id='nav-links' className={activeSection === 'Portfolio' ? 'active' : ''}>
          <Link to="/portfolio" onClick={() => setActiveSection('Portfolio')}>Portfolio</Link>
        </li>
        <li id='nav-links' className={activeSection === 'Contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => setActiveSection('Contact')}>Contact</Link>
        </li>
        <li id='nav-links' className={activeSection === 'Resume' ? 'active' : ''}>
          <Link to="/resume" onClick={() => setActiveSection('Resume')}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;