// src/pages/OrdersPage.js

import React from 'react';
import OrderList from '../components/OrderList';

const OrdersPage = ({ orders }) => (
  <div className="orders-page">
    <h2>Your Orders</h2>
    <OrderList orders={orders} />
  </div>
);

export default OrdersPage;
