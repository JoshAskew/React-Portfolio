import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';

function Footer() {
  return (
    <footer>
      <div className='footer-child'>
      <p className= 'follow'>Follow me on:</p>
      <a href="https://github.com/JoshAskew" target="_blank"> <img src={github} alt="GitHub icon"  className="social-icon"/></a>
      <a href="https://linkedin.com/in/joshua-askew-0293bb338" target="_blank"><img src={linkedin} alt="LinkedIn icon" className="social-icon"/></a>
      <a href="https://www.facebook.com/josh.askew.71" target="_blank"><img src={facebook} alt="Facebook icon" className="social-icon facebook"/></a>
      </div>
      <p className='copyright'>© {new Date().getFullYear()} Josh Askew. All rights reserved.</p>
    </footer>
  );
}

export default Footer;