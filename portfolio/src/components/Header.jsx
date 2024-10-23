import React from 'react';
import Navigation from './Navigation';

function Header({ activeSection, setActiveSection }) {
  return (
    <header>
      <h1>Developer's Name</h1>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </header>
  );
}

export default Header;