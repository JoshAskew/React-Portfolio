import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>CSS</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
}

export default Resume;