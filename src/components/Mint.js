// src/components/Mint.js
import React, { useState, useContext } from 'react';
import { BlockchainContext } from '../context/BlockchainContext';
import { ethers } from 'ethers';

const Mint = () => {
  const { tokenContract } = useContext(BlockchainContext);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleMint = async () => {
    if (!recipient || !amount) {
      alert('Please enter both recipient address and amount.');
      return;
    }
    try {
      // Convert amount to 18 decimals
      const tx = await tokenContract.mint(recipient, ethers.parseUnits(amount, 18));
      await tx.wait();
      alert('Carbon credits minted successfully!');
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error('Minting failed:', error);
      alert('Minting failed. Check console for details.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-4">Mint Carbon Credits</h3>
      <label className="block mb-2 font-semibold">Recipient Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="0x..."
      />
      <label className="block mb-2 font-semibold">Amount</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="e.g., 10"
      />
      <button onClick={handleMint} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Mint Credits
      </button>
    </div>
  );
};

export default Mint;
