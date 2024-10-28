import React from 'react';
import Project from './Project';
import cheat from '../images/cheat.gif';
import readme from '../images/readme.gif';
import vehiclebuilder from '../images/vehiclebuilder.gif';
import tracker from '../images/tracker.jpg';
import swatter from '../images/swatter.gif';
import tune from '../images/tune.gif';



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
  {
    title: 'TuneForge',
    image: tune,
    deployedLink: 'https://yahye-mohamed101.github.io/TuneForge/',
    repoLink: 'https://github.com/yahye-mohamed101/TuneForge',
  },
  {
    title: 'Flyswatter Game',
    image: swatter,
    deployedLink: 'https://joshaskew.github.io/Fly-Swatter-Game/',
    repoLink: 'https://github.com/JoshAskew/Fly-Swatter-Game',
  },
];

function Portfolio() {
  return (
    <section className='portfolio-section'>
      <h2 className="portfolio-header">Portfolio</h2>
      <div className='card-wrapper'>
        {projects.map((project, index) => (
            <Project
              key={project.title}
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              repoLink={project.repoLink}
            />

        ))}
      </div>
    </section>
  );
}

export default Portfolio;