import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <BootstrapNavbar bg="dark" variant="dark" expand="lg">
    <Container>
      
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <NavLink as={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/about-me">About</NavLink>
          </NavItem>
        </Nav>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);

export default Navbar;
