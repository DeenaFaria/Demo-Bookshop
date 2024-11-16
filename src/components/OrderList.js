// src/components/OrderList.js
import React from 'react';
import PropTypes from 'prop-types';
import './OrderList.css'; // Optional: For styling this specific component

const OrderList = ({ orders }) => {
  return (
    <div className="orderList">
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet!</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h3>Order #{order.id}</h3>
              <p>Status: {order.status}</p>
              <p>Items:</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>{item.title} - ${item.price}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define the expected `orders` prop type
OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default OrderList;
