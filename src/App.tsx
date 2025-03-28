import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Branding from './pages/Branding';
import Venue from './pages/Venue';
import Execution from './pages/Execution';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/execution" element={<Execution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;