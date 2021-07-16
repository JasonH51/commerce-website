import React from 'react';
import '../css/Product.css';

function Product({id, title, price, image, rating}) {
  return (
    <div className="product container">
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
        <button className="product-button">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
