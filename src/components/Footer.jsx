import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import stackoverflow from '../images/stackoverflow.png';

function Footer() {
  return (
    <footer>
      <div className='footer-child'>
      <p className= 'follow'>Follow me on:</p>
      <a href="https://github.com/JoshAskew" target="_blank"> <img src={github} alt="GitHub icon"  className="social-icon"/></a>
      <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="LinkedIn icon" className="social-icon"/></a>
      <a href="https://stackoverflow.com" target="_blank"><img src={stackoverflow} alt="StackOverflow icon" className="social-icon"/></a>
      </div>
      <p className='copyright'>© {new Date().getFullYear()} Josh Askew. All rights reserved.</p>
    </footer>
  );
}

export default Footer;