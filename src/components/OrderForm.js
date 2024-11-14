// src/components/OrderForm.js

import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerName, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Details</h2>
      <label>
        Name:
        <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
      </label>
      <label>
        Address:
        <input value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <button type="submit">Confirm Order</button>
    </form>
  );
};

export default OrderForm;
