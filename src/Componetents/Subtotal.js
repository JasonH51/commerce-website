import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../State/StateProvider';
import {calcValue} from '../State/reducer';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input className="gift-input" type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calcValue(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="subtotal-button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
