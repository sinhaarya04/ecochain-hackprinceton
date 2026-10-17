// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Welcome to EcoChain Dashboard</h2>
      <p className="text-gray-700">
        Track, mint, and buy carbon credits in a transparent and secure blockchain environment.
      </p>
      {/* Future enhancements: Show statistics, recent transactions, etc. */}
    </div>
  );
};

export default Dashboard;
