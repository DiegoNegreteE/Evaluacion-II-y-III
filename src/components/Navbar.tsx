import { Navbar, Nav, Container,} from 'react-bootstrap';

const TechNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="brand-text">
          <img
            src="/images/logo.png"
            alt="Logo TechHome"
            height="120"
            className="me-2"
          />
          TECH HOME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto d-flex align-items-center gap-5">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/us">Nosotros</Nav.Link>
            <Nav.Link href="/services">Servicios</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
                </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TechNavbar;
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';