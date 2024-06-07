import React from 'react';
import goodsList from '../goods-list.json';
import Card from './Сard';
import '../styles/Cards.css';

function Cards() {
  return (
    <div className="cards-container">
      {goodsList.map((good) => (
        <Card
          key={good.id}
          name={good.name}
          price={good.price}
          icon={good.icon}
        />
      ))}
    </div>
  );
}

export default Cards;
