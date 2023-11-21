import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Friendster.png'

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={ Logo }
              width="60"
              height="60"
              className="logo d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex center-links">
            <Nav.Link href="/Home" className = "ms-3">Home</Nav.Link>
            <Nav.Link href="/MyEvents" className = "ms-3">My Events</Nav.Link>
            <Button variant="success" className = "ms-3">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
