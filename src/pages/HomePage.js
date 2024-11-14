import React, { useState } from 'react';
import BookShelf from '../components/BookShelf';
import OrderForm from '../components/OrderForm';
import Cart from '../components/Cart';
import './HomePage.css';  // Import the stylesheet

const HomePage = () => {
  const [orders, setOrders] = useState([]);

  const handlePlaceOrder = (cartItems) => {
    const newOrder = {
      id: orders.length + 1,
      items: cartItems,
      status: 'Pending',
      rating: 0,
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <div>
      <h1>Welcome to the Bookstore</h1>
      <div className="book-shelf-container">
        <BookShelf />
      </div>
      <footer className="footer">
        <p>© 2024 Deena Faria, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
