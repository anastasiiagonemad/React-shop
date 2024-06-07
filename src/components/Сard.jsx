import React from 'react';

function Card({ name, price, icon }) {
  return (
    <div>
      <div className="card">
        <div className="card__icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="card__name">
          <h2>{name}</h2>
        </div>
        <div className="card__price">
          <p>{price}</p>
        </div>
        <div className="card__button">
          <button>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
