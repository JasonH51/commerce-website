import React from 'react';
import {useStateValue} from '../State/StateProvider';
import '../css/BasketItems.css';

function BasketList() {
  const [{basket}] = useStateValue();
  return basket.map(item => {
    return (
      <div className="basket-container">
        <img className="basket-image" src={item.image} alt="" />
        <div className="basket-content">
          <h2 className="basket-title">{item.title}</h2>
          <h3 className="basket-price">${item.price}</h3>
          <div className="rating">
            {Array(item.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
                </div>
                <button className="btn-remove">Remove</button>
        </div>
      </div>
    );
  });
}

export default BasketList;
