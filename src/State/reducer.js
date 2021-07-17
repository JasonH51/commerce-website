export const initalState = {
  basket: []
};

export const calcValue = basket => {
  return basket
    ?.reduce((acc, item) => {
      return item.price + acc;
    }, 0)
    .toFixed(2);
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {...state, basket: [...state.basket, action.item]};
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log('error');
      }
      return {...state, basket: newBasket};
    default:
      return state;
  }
};
