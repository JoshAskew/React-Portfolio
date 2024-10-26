import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <Card style={{ width: '26rem' }} className="mb-4 hover-zoom">
        <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Button variant="dark" href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Site
        </Button>{' '}
        <Button variant="secondary" href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;