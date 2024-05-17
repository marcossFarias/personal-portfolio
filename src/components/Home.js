import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import './styles.css';

const Home = () => (
  <div>
    <div id="welcome-section" className="bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>
              Bem-vindo ao meu{' '}
              <ReactTyped
                strings={['Portfólio', 'Showcase']}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </h1>
            <p className="lead">
              Sou um desenvolvedor backend apaixonado por criar experiências digitais incríveis.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;
