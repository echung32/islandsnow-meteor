import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';
import Footer from '../components/Footer';

const IslandSnow = () => (
  <Container fluid>
    <NavBar />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
    <Footer />
  </Container>
);

export default IslandSnow;
