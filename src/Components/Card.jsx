
import React from 'react';

function Card({ title, author }) {
    const cardStyle = {
        backgroundColor: 'red', 
        border: '4px solid white', 
        padding: '10px', 
        margin: '10px 0',
      };
  return (
    <div className="card" style={cardStyle}>
        <h2>Ultimo Libro Agregado</h2>
        <h3>Título: {title}</h3>
        <p>Autor: {author}</p>
    </div>
  );
}

export default Card;