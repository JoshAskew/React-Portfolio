import React from 'react';

const projects = [
  {
    title: 'Project 1',
    image: 'project1.jpg',
    deployedLink: 'https://deployed-link.com',
    repoLink: 'https://github.com/project1',
  },
  // Add 5 more projects similarly
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;