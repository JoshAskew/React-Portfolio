import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import stackoverflow from '../images/stackoverflow.png';

function Footer() {
  return (
    <footer>
      <p>Follow me on:</p>
      <a href="https://github.com/JoshAskew" target="_blank"> <img src={github} alt="GitHub icon" style={{ width: '50px', marginRight: '35px'}} /></a>
      <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="LinkedIn icon" style={{ width: '50px', marginRight: '35px' }} /></a>
      <a href="https://stackoverflow.com" target="_blank"><img src={stackoverflow} alt="StackOverflow icon" style={{ width: '50px'}} /></a>
    </footer>
  );
}

export default Footer;