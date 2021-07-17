import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../State/StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  const calcValue = () => {
    return basket
      .reduce((acc, item) => {
        return item.price + acc;
      }, 0)
      .toFixed(2);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            {/*homework */}
            <p>
              Subtotal ({basket?.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input className="gift-input" type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calcValue()} //Homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="subtotal-button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
