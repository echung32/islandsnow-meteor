import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import IslandSnow from '../pages/IslandSnow';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<IslandSnow />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
