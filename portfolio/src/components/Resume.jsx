import React from 'react';
import Card from 'react-bootstrap/Card';
import resume from '../pdfs/Resume.pdf'

function Resume() {
  return (
    <section>
      <h2 className='resume-header'>Resume</h2>
      <div className='download-container'>
      <a href= {resume} download className='download'>Download Resume</a>
      </div>
      <h3>Proficiencies</h3>

      <Card style={{ width: '26rem', maxHeight: '50px;' }} className="mb-4">
      <Card.Body>
      <h5 className='prof-h5'>Front End</h5>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Bootstrap</li>
        <li>RESTful APIs</li>
        <li>NodeJS</li>
      </ul>
      </Card.Body>
    </Card>

    <Card style={{ width: '26rem', maxHeight: '50px;' }} className="mb-4">
      <Card.Body>
      <h5 className='prof-h5'>Back End</h5>
      <ul>
        <li>JavaScript</li>
        <li>postgresSQL</li>
        <li>SQL Databases</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>NodeJS</li>
        <li>Insomnia</li>
      </ul>
      </Card.Body>
    </Card>

    <Card style={{ width: '26rem', maxHeight: '50px;' }} className="mb-4">
    <Card.Body>
      <h5 className='prof-h5'>IDEs & Version control</h5>
      <ul>
      <li>Visual Studio Code</li>
      <li>Git</li>
      </ul>
      </Card.Body>
      </Card>
    </section>
  );
}

export default Resume;