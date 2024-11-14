import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);  // Use clearCart from CartContext

  const totalPrice = cart.reduce((acc, book) => acc + book.price, 0);

  const handleCheckout = () => {
    alert(`Thank you for your purchase! Your total is $${totalPrice.toFixed(2)}.`);
    clearCart();  // Clears the cart after checkout
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
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
