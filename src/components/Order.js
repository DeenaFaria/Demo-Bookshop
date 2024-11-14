// Inside Order.js

import React, { useState } from 'react';
import StarRating from './StarRating';
import OrderForm from './OrderForm';

const Order = ({ order }) => {
  const [rating, setRating] = useState(order.rating);

  const handleRating = (newRating) => {
    setRating(newRating);
    // You can add additional code here to save the rating to state or backend
  };

  return (
    <div className="order-item">
      <p>Order ID: {order.id}</p>
      <p>Status: {order.status}</p>
      <StarRating rating={rating} onRate={handleRating} />
      <OrderForm/>
    </div>
  );
};

export default Order;
