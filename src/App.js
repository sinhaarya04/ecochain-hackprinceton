// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import MintPage from './pages/MintPage';
import BuyPage from './pages/BuyPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
