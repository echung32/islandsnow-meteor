import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook /></Nav.Link>
        <Nav.Link><Twitter /></Nav.Link>
        <Nav.Link><Pinterest /></Nav.Link>
        <Nav.Link><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill /> </Nav.Link>
        <Nav.Link><Search /> </Nav.Link>
        <Nav.Link><PersonFill /> </Nav.Link>
        <NavDropdown title={<Cart />}>
          <NavDropdown.Item />
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
