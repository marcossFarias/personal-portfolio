import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const Footer = () => (
  <footer id="footer">
    <Container fluid>
      <Row className="pt-5">
        <Col xs={12} md={6} lg={4} xl={3}>
          <p>&copy; 2024 Marcos Emanuel. All rights reserved.</p>
          <a id="profile-link" href="https://github.com/marcossFarias" target="_blank" rel="noopener noreferrer">My GitHub Profile</a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
