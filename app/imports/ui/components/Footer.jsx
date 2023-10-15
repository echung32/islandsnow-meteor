import React from 'react';
import { Col, Container, InputGroup, Form, Button } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer>
    <Container className="p-5 footer">
      <Row>
        <Col>
          <h2>NAVIGATION</h2>
          <hr />
          <p>About Us</p>
          <p>Employment</p>
          <p>Videos</p>
        </Col>
        <Col>
          <h2>MAIN MENU</h2>
          <hr />
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </Col>
        <Col>
          <h2>CONNECT</h2>
          <hr />
          <p>Sign up for the latest updates</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Email Address"
              aria-label="email address"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-light" id="button-addon2">
              Join
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
