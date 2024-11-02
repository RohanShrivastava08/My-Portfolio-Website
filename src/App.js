// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificationsPage from './pages/CertificationPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-16"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
