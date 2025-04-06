import React, { useState } from 'react';
import './Wallet.css';

function Wallet() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  const addMoney = () => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      setBalance(balance + value);
      setAmount('');
    }
  };

  const withdrawMoney = () => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      setBalance(balance - value);
      setAmount('');
    }
  };

  const resetBalance = () => {
    setBalance(0);
    setAmount('');
  };

  return (
    <div className="wallet-container">
      <h1 className="wallet-title">Wallet</h1>
      <p className="wallet-balance">Balance: ${balance.toFixed(2)}</p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Money"
      />

      <div>
        <button onClick={addMoney}>Add Money</button>
        <button onClick={withdrawMoney}>Withdraw Money</button>
        <button onClick={resetBalance}>Cancel</button>
      </div>
    </div>
  );
}

export default Wallet;
