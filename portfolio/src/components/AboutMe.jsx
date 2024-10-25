import React from 'react';
import profile from '../images/mepic.jpeg'

function AboutMe() {
  return (
    <section>
      <div className='am-h2-container'>
        <h2 className="am-h2">About Me</h2>
      </div>
      <div className='prof-pic-container'>
        <img src={profile} alt="Developer" className='propic' />
      </div>
      <p className='about-p'>I am a Minnesota native with a passion for the outdoors, technology, and sports. With nearly 13 years of marriage to my best friend, I am a proud father of two energetic boys. My professional interests revolve around technology, while I’ve also been a dedicated gamer for as long as I can remember. Outside of work, I enjoy coaching my sons' hockey teams, spending time at the cabin, and pursuing outdoor activities such as pheasant hunting and fishing.</p>
    </section>
  );
}

export default AboutMe;