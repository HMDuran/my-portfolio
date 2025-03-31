import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';

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
              </div>
            } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;