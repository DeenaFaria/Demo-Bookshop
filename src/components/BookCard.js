
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-price">${book.price}</p>
      <p className="book-rating">Rating: {book.rating}⭐</p>
      <button onClick={() => addToCart(book)} className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default BookCard;
