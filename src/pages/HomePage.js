// src/pages/HomePage.js
import React, { useState } from 'react';
import { useContext } from 'react';
import BookShelf from '../components/BookShelf';
import Cart from '../components/Cart';
import OrderList from '../components/OrderList';
import { OrderContext } from '../context/OrderContext'; // Import OrderContext
import './HomePage.css';

const HomePage = () => {
  //const [orders, setOrders] = useState([]); // State for storing orders
  const { orders, setOrders } = useContext(OrderContext); 

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
          <Cart onPlaceOrder={handlePlaceOrder} />
          <OrderList orders={orders} /> {/* Pass the orders as props */}
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Deena Faria, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
