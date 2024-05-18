import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles.css';

const Projects = () => (
  <Container className="py-5">
    <h2 className="text-center mb-5">Meus Projetos</h2>
    <Row>
      <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
        <Card className="project-card h-100">
          <Card.Body>
            <Card.Title>Sortado</Card.Title>
            <Card.Text>
              Um script java pra testar o tempo de execução de algoritmos de sorting.
            </Card.Text>
            <Card.Link href="https://github.com/marcossFarias/sortado" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
        <Card className="project-card h-100">
          <Card.Body>
            <Card.Title>Survey Form</Card.Title>
            <Card.Text>
              Survey Form for FreeCode Camp.
            </Card.Text>
            <Card.Link href="https://github.com/marcossFarias/survey-form" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
        <Card className="project-card h-100">
          <Card.Body>
            <Card.Title>Tribute Page</Card.Title>
            <Card.Text>
              ribute Page for FreeCode Camp.
            </Card.Text>
            <Card.Link href="https://github.com/marcossFarias/tribute-page" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
        <Card className="project-card h-100">
          <Card.Body>
            <Card.Title>Personal Portfolio</Card.Title>
            <Card.Text>
              Personal Portfolio for FreeCode Camp.
            </Card.Text>
            <Card.Link href="https://github.com/marcossFarias/personal-protfolio" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Projects;
