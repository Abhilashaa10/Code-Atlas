import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experiments from './Pages/Experiments';
import ExperimentPage from './Pages/ExperimentPage';

import App from './App';
import Dashboard from './components/Dashboard';
import Landing from './Pages/Landing';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<App />} />

        <Route path="/experiments" element={<Experiments />} />
        <Route path="/experiment/:id" element={<ExperimentPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);