// src/components/About.js

import React from 'react';
import './About.css';

const About = () => {
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
  ];

  return (
    <div className="about-section">
      <h2>About Us</h2>
      <p>Welcome to our bookstore! We offer a wide range of books for every kind of reader. Our mission is to inspire the love of reading and make knowledge accessible to all.</p>
      <h3>Famous Quotes to Inspire You</h3>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
