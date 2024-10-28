import React from 'react';
import Card from 'react-bootstrap/Card';
import resume from '../pdfs/Resume.pdf'
import css from '../images/css.png';
import html from '../images/html.png';
import JavaScript from '../images/JavaScript.png';
import react from '../images/react.png';
import typescript from '../images/typescript1.png';
import bootsrtrap from '../images/bootstrap1.png';
import restful from '../images/restful.png';
import node from '../images/node.png';
import postgres from '../images/postgres.png';
import SQL from '../images/sql.png';
import express from '../images/express.png';
import insomnia from '../images/insomnia.png';
import vs from '../images/vs.png';
import git from '../images/git.png';
import vite from '../images/vite.png';
import json from '../images/JSON.png';
import npm from '../images/npm.png';

function Resume() {
  return (
    <section>
      <h2 className='resume-header'>Resume</h2>
      <div className='download-container'>
      <a href= {resume} download className='download'>Download Resume</a>
      </div>
      <h3 className='proficiencies-header'>Proficiencies</h3>
      <div className='prof-container'>
      <Card style={{ width: '20rem', maxHeight: '50px;' }} className="mb-4 prof-card">
      <Card.Body>
      <h5 className='prof-h5'>Front End</h5>
      <ul className='proficiencies'>
        <li><img src={css} alt="CSS icon"  className="language-icon"/>CSS</li>
        <li><img src={html} alt="HTML icon"  className="language-icon"/>HTML</li>
        <li><img src={JavaScript} alt="JS icon"  className="language-icon"/>JavaScript</li>
        <li><img src={react} alt="React icon"  className="language-icon"/>React</li>
        <li><img src={npm} alt="JSON icon"  className="language-icon"/>NPM</li>
        <li><img src={typescript} alt="TypeScript icon"  className="language-icon"/>TypeScript</li>
        <li><img src={bootsrtrap} alt="Bootstrap icon"  className="language-icon"/>Bootstrap</li>
        <li><img src={restful} alt="RESTFUL API icon"  className="language-icon"/>RESTful APIs</li>
        <li><img src={node} alt="NodeJS icon"  className="language-icon"/>NodeJS</li>
        <li><img src={vite} alt="Vite icon"  className="language-icon"/>Vite</li>
        <li><img src={json} alt="JSON icon"  className="language-icon"/>JSON</li>
      </ul>
      </Card.Body>
    </Card>
    </div>

    <div className='prof-container'>
    <Card style={{ width: '20rem', maxHeight: '50px;' }} className="mb-4 prof-card">
      <Card.Body>
      <h5 className='prof-h5'>Back End</h5>
      <ul className='proficiencies'>
        <li><img src={JavaScript} alt="JS icon"  className="language-icon"/>JavaScript</li>
        <li><img src={postgres} alt="postgresSQL icon"  className="language-icon"/>postgresSQL</li>
        <li><img src={SQL} alt="SQL icon"  className="language-icon"/>SQL Databases</li>
        <li><img src={express} alt="ExpressJS icon"  className="language-icon"/>ExpressJs</li>
        <li><img src={npm} alt="NPM icon"  className="language-icon"/>NPM</li>
        <li><img src={json} alt="JSON icon"  className="language-icon"/>JSON</li>
        <li><img src={restful} alt="RESTFUL API icon"  className="language-icon"/>RESTful APIs</li>
        <li><img src={node} alt="NodeJS icon"  className="language-icon"/>NodeJS</li>
        <li><img src={insomnia} alt="Insomnia icon"  className="language-icon"/>Insomnia</li>
      </ul>
      </Card.Body>
    </Card>
    </div>

    <div className='prof-container'>
    <Card style={{ width: '26rem', maxHeight: '50px;' }} className="mb-4 prof-card">
    <Card.Body>
      <h5 className='prof-h5'>IDEs & Version control</h5>
      <ul className='proficiencies'>
      <li><img src={vs} alt="Visual Studio icon"  className="language-icon"/>Visual Studio Code</li>
      <li><img src={git} alt="Git icon"  className="language-icon"/>Git</li>
      </ul>
      </Card.Body>
      </Card>
      </div>
    </section>
  );
}

export default Resume;