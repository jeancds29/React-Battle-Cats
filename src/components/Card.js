import React from 'react';

const Card = ({ name,attack, defense, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='cats' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{attack}</p>
        <p>{defense}</p>
      </div>
    </div>
  );
}

export default Card;
