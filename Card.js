// Card.js
import React from 'react';
import './app.css'; 

const Card = ({ suit, rank }) => {
  return (
    <div className="card">
      <div className={`card-suit ${suit.toLowerCase()}`}>{suit}</div>
      <div className="card-rank">{rank}</div>
    </div>
  );
};

export default Card;
