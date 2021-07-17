import React from 'react';
import '../css/Product.css';
import {useStateValue} from '../State/StateProvider';

function Product({id, title, price, image, rating}) {
  const [{basket}, dispatch] = useStateValue();

  
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  };

  return (
    <div key={id} className="product container">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <strong>${price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <img className="product-img" src={image} alt="" />
        <button onClick={addToBasket} className="product-button">
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
