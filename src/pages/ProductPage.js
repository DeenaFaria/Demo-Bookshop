// src/pages/ProductPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';

const ProductPage = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className="product-page">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Price: ${book.price}</p>
      <StarRating rating={book.rating} />
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
