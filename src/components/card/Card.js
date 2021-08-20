import React from 'react';

import './card.styles.css';

const Card = ({ name,attack, defense, id }) => {
  return (
    <div className='card-container'>
      <img alt='battle cats' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{attack}</p>
        <p>{defense}</p>
      </div>
    </div>
  );
}

export default Card;
