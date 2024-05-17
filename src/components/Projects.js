import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const Projects = () => (
  <Container>
    <Row id="projects" className="py-5">
      <Col xs={12} md={6} lg={4} xl={3}>
        <div className="project-tile">
          <p><a href="https://github.com/marcossFarias/sortado">Sortado</a></p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3}>
        <div className="project-tile">
          <p><a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">Java Platform</a></p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Projects;
