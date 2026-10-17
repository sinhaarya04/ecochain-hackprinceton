// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';  // Global CSS (includes Tailwind directives if imported here)
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlockchainProvider } from './context/BlockchainContext';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlockchainProvider>
      <Router>
        <App />
      </Router>
    </BlockchainProvider>
  </React.StrictMode>
);
