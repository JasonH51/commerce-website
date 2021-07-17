import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import BasketList from './BasketList';
import {useStateValue} from '../State/StateProvider';

export default function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png"
          alt="ad"
        />
        <div>
          <h2 className="checkout-title">
            {basket.length ? `Your Shopping Basket` : `You're Basket is empty.`}
          </h2>
          {basket.map(item => (
            <BasketList
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}
