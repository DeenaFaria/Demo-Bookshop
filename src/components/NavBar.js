// src/components/NavBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { OrderContext } from '../context/OrderContext'; // Import OrderContext
import './NavBar.css';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const { orders } = useContext(OrderContext); // Get orders from OrderContext

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
      <Link to="/order" className="nav-link">Orders ({orders.length})</Link> {/* Display order count */}
      <Link to="/quote" className="nav-link">About</Link>
    </nav>
  );
};

export default NavBar;
