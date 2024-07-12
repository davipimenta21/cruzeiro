import React from 'react';
import '../MusicaCard/card.css'

const MusicaCard = ({ titulo, letra }) => {
    return (
      <div className="musica-card">
        <h3>{titulo}</h3>
        <p>{letra}</p>
      </div>
    );
  };

export default MusicaCard;


