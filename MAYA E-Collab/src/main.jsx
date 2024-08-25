import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import LandingPage from './Pages/LandingPage.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import GlobalClassroom from './Pages/GlobalClass.jsx';
import CulturalImmersion from './Pages/Culture.jsx';
import ResourceRepository from './Pages/Resource.jsx';
import LanguageExchange from './Pages/LanguageExchange.jsx';
import ProfileSettings from './Pages/Profilesettings.jsx';
import Projects from './Pages/Spaces.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/global-classroom" element={<GlobalClassroom />} />
          <Route path="/project-spaces" element={<Projects />} />
          <Route path="/cultural-immersion" element={<CulturalImmersion />} />
          <Route path="/resource-repository" element={<ResourceRepository />} />
          <Route path="/language-exchange" element={<LanguageExchange />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
