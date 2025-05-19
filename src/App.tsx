// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Us from './pages/Us';
import Services from './pages/Services';
import TechNavbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importación de estilos CSS


function App() {
  return (
    <Router>
      <TechNavbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/us" element={<Us />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Index from './pages/Index';
// // import Contact from './pages/Contact';
// // import Us from './pages/Us';
// // import Services from './pages/Services';
// // import TechNavbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import 'bootstrap/dist/css/bootstrap.min.css';

