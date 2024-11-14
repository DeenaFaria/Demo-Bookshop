// src/components/StarRating.js

import React, { useState } from 'react';

const StarRating = ({ rating = 0, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (newRating) => {
    if (onRate) onRate(newRating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleClick(star)}
          style={{
            cursor: 'pointer',
            color: star <= (hoverRating || rating) ? '#FFD700' : '#ddd'
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
