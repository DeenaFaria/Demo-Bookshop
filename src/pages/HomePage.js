// src/pages/HomePage.js
import React, { useState } from 'react';
import BookShelf from '../components/BookShelf';
import OrderForm from '../components/OrderForm';
import Cart from '../components/Cart';
import './HomePage.css';

const HomePage = () => {
  const [orders, setOrders] = useState([]); // State for storing orders

  const handlePlaceOrder = (cartItems) => {
    // Create a new order with cart items
    const newOrder = {
      id: orders.length + 1, // Increment the ID for new orders
      items: cartItems,
      status: 'Pending', // You can modify this as per your app's flow
      rating: 0, // Initialize with a rating of 0
    };

    setOrders([...orders, newOrder]); // Update orders with the new order
    console.log("Order placed:", newOrder); // Debugging log to see the new order
  };

  return (
    <div>
      <h1>Welcome to the Bookstore</h1>
      <div className="main-container">
      <div className="book-shelf-container">
        <BookShelf />
        </div>
        <div>
        <Cart onPlaceOrder={handlePlaceOrder} /> {/* Pass the placeOrder function */}
     
      

      {/* Display orders */}
      <div class="orderList">
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
      </div>
      </div>
      <footer className="footer">
        <p>© 2024 Deena Faria, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
