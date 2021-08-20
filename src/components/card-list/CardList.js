import React from 'react';

import Card from "../card/Card";

import './card-list.styles.css';

const CardList = ({ cats }) => {
  return (
    <div className='card-list'>
      {
        cats.map((user, i) => {
          return (
            <Card
              key={i}
              id={cats[i].id}
              name={cats[i].name}
              attack={`ATK ${cats[i].attack}`}
              defense={`DEF ${cats[i].defense}`}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;