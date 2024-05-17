import React from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
  <div>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">Marcos Portfolio Page</Navbar.Brand>
      <Nav className="ml-auto" activeKey="/home">
        <NavItem>
          <NavLink as={Link} to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/about-me">About Me</NavLink>
        </NavItem>
      </Nav>
    </Navbar>

    <div id="welcome-section" fluid>
      <Container>
        <h1>Marcos Portfolio Page</h1>
      </Container>
    </div>
  </div>
);

export default Home;
