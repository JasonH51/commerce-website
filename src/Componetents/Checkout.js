import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import BasketList from './BasketList';

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png"
          alt="ad"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          <BasketList />
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}
