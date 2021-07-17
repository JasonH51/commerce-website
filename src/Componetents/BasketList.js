import React from 'react';

import '../css/BasketItems.css';
import {useStateValue} from '../State/StateProvider';

function BasketList({id, image, title, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };
  return (
    <div className="basket-container">
      <img className="basket-image" src={image} alt="" />
      <div className="basket-content">
        <h2 className="basket-title">{title}</h2>
        <h3 className="basket-price">${price}</h3>
        <div className="rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={() => removeFromBasket()} className="btn-remove">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default BasketList;
