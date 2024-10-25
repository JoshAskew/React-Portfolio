import React from 'react';
import Project from './Project';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cheat from '../images/cheat.gif';
import readme from '../images/readme.gif';
import vehiclebuilder from '../images/vehiclebuilder.gif';
import tracker from '../images/tracker.jpg';


const projects = [
  {
    title: 'CSS Cheat Sheet',
    image: cheat,
    deployedLink: 'https://joshaskew.github.io/mini-project-1/',
    repoLink: 'https://github.com/JoshAskew/mini-project-1',
  },
  {
    title: 'README Generator',
    image: readme,
    deployedLink: '',
    repoLink: 'https://github.com/JoshAskew/README-Generator',
  },
  {
    title: 'Vehicle Builder',
    image: vehiclebuilder,
    deployedLink: '',
    repoLink: 'https://github.com/JoshAskew/Vehicle-Builder',
  },
  {
    title: 'Employee Tracker',
    image: tracker,
    deployedLink: '',
    repoLink: 'https://github.com/JoshAskew/Employee-Tracker',
  },
];

function Portfolio() {
  return (
    <section>
      <h2 className="portfolio-header text-center mb-4">Portfolio</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Project
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              repoLink={project.repoLink}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Portfolio;