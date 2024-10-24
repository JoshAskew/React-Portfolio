import React from 'react';

function Resume() {
  return (
    <section>
      <h2 className='resume-header'>Resume</h2>
      <a href="https://docs.google.com/document/d/14s2cUop3L5g-py8BYRwTCmaHQApOyHOXYMxclbPxWZ0/edit?usp=sharing" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <h5>Front End</h5>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Bootstrap</li>
        <li>RESTful APIs</li>
      </ul>
      <h5>Back End</h5>
      <ul>
        <li>JavaScript</li>
        <li>postgresSQL</li>
        <li>SQL Databases</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>Insomnia</li>
      </ul>
      <h5>IDEs</h5>
      <li>Visual Studio Code</li>
      <h5>Version Control</h5>
      <li>Git</li>
    </section>
  );
}

export default Resume;