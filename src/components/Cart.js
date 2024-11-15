// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = ({ onPlaceOrder }) => { // Receive the onPlaceOrder prop here
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, book) => acc + book.price, 0);

  const handlePlaceOrder = () => {
    onPlaceOrder(cart); // Pass cart items to the parent (HomePage)
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((book, index) => (
        <div key={index} className="cart-item">
          <p>{book.title}</p>
          <p>${book.price}</p>
          <button onClick={() => removeFromCart(book.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button> {/* Trigger place order */}
    </div>
  );
};

export default Cart;
