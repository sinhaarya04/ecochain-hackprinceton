// src/components/Buy.js
import React, { useState, useContext, useEffect } from 'react';
import { BlockchainContext } from '../context/BlockchainContext';
import { ethers } from 'ethers';

const Buy = () => {
  const { marketplaceContract } = useContext(BlockchainContext);
  const [credits, setCredits] = useState([]);
  const [buying, setBuying] = useState(false);

  // Dummy fetch function; replace with real contract/API call
  const fetchCredits = async () => {
    setCredits([
      { id: 1, name: 'Carbon Credit #1', price: '0.01' },
      { id: 2, name: 'Carbon Credit #2', price: '0.02' }
    ]);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  const handleBuy = async (creditId, price) => {
    setBuying(true);
    try {
      const tx = await marketplaceContract.buyCredit(creditId, { value: ethers.parseEther(price) });
      await tx.wait();
      alert('Credit purchased successfully!');
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Purchase failed. Check console for details.');
    }
    setBuying(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-4">Available Carbon Credits</h3>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id} className="p-4 border rounded mb-4 flex justify-between items-center">
            <div>
              <h4 className="font-semibold">{credit.name}</h4>
              <p className="text-gray-600">Price: {credit.price} ETH</p>
            </div>
            <button
              onClick={() => handleBuy(credit.id, credit.price)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={buying}
            >
              {buying ? 'Processing...' : 'Buy'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buy;
