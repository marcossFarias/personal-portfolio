import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function AboutMe() {
  return (
    <Container className="about-me-container">
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
          
          
        </Col>
        <Col xs={12} sm={6} md={8} lg={9} xl={10}>
          <h1>About Me</h1>
          <p>Here's a brief summary of who I am and what I'm about:</p>
          <ul>
            <li>I'm a [insert your profession/interests here], with a passion for [insert specific areas of interest].</li>
            <li>I've been [insert relevant experience or qualifications].</li>
            <li>My goal is to [insert your goals or aspirations].</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
