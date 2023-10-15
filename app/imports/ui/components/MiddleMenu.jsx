import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const MiddleMenu = () => (
  <Navbar className="pt-3">
    <Container className="justify-content-center">
      <Nav className="gap-3 middle-menu">
        <NavDropdown title="MEN">
          <NavDropdown.Item />
          <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="WOMEN">
          <NavDropdown.Item />
          <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="KIDS">
          <NavDropdown.Item />
          <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="BRANDS">
          <NavDropdown.Item />
          <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
        </NavDropdown>
        <Nav.Link>SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MiddleMenu;
