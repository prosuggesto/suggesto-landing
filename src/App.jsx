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
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, color: 'red', background: 'white', padding: '10px' }}>
        DEBUG MODE ACTIVE
      </div>
      <Background />
      <Home />
    </>
  );
}

export default App;
