// src/pages/OrdersPage.js
import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const OrdersPage = () => {
  const { orders } = useContext(OrderContext); // Get orders from context

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet!</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h3>Order #{order.id}</h3>
              <p>Status: {order.status}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
