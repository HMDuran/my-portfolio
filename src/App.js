import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import PortfolioSection from './components/PortfolioSection'
import Contact from './components/Contact'
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <div>
                <Hero />
                <About />
                <PortfolioSection />
                <Contact />
              </div>
            } />
            <Route path="/portfolio" element={<Portfolio />} /> 
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;