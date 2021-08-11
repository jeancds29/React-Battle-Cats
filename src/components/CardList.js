import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
  return (
    <div>
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