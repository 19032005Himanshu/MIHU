import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Video from './components/Video';
import Features from './components/Features';
import FAQ from './components/FaQ';
import Footer from './components/Footer';

import { PolicyPage  } from "./components/PrivacyPolicy";
import Tos from "./components/Tos";
import Rp from "./components/Rp";



function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute inset-0 h-[350px] bg-black -z-10"></div>
      <Navbar />
      <HeroSection />
      <div className="relative z-10"><Video /></div>
      <div id="features" className="relative z-10"><Features /></div>
      <div className="relative z-10"><FAQ /></div>
      <div id="contact" className="relative z-10"><Footer /></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MIHU" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/rp" element={<Rp />} />
      </Routes>
    </Router>
  );
}

export default App;
