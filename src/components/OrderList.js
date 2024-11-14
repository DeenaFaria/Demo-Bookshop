// src/components/OrderList.js

import React from 'react';
import Order from './Order';

const OrderList = ({ orders = [] }) => {
  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        orders.map(order => <Order key={order.id} order={order} />)
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default OrderList;
