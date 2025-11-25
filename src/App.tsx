import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { JudgePageLayout } from './pages/JudgePageLayout';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-vintage-cream font-mono selection:bg-vintage-red selection:text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/judge" element={<JudgePageLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
