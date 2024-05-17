import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import Navbar from './Navbar';

const AboutMe = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">About Me</h2>
      <Row>
        <Col md={6}>
          <img src="https://via.placeholder.com/300x200" alt="Marcos Emanuel" className="img-fluid rounded mb-3" />
        </Col>
        <Col md={6}>
          <h3>Marcos Emanuel</h3>
          <p>
            Hi there! I'm Marcos Emanuel, a passionate software developer with a strong background in Java and web development.
          </p>
          <p>
            I have experience working on various projects, from building robust backend systems to creating interactive user interfaces. I'm always eager to learn new technologies and tackle challenging problems.
          </p>
          <p>
            In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
