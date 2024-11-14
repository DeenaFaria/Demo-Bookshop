import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './BookShelf.css';

const BookShelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bookshelf">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookShelf;
