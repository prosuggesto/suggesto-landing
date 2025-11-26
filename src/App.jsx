import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LegalNotice from './pages/LegalNotice';
import Demo from './pages/Demo';
import Background from './components/Background';

function App() {
  return (
    <Router>
      {/* <Background /> */}
      <div className="pt-32 text-center text-white text-4xl font-bold">
        TEST DEPLOIEMENT - SI VOUS VOYEZ CA, REACT MARCHE
      </div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/legal" element={<LegalNotice />} />
        <Route path="/demo" element={<Demo />} />
      </Routes> */}
    </Router>
  );
}

export default App;
