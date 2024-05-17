import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

const AppRouter = () => (
  <Router>
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
