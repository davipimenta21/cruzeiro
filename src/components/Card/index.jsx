import React from 'react';
import '../Card/Card.css'

const Card = ({ title, description, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
