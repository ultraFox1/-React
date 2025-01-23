const initialState = {
  products: [],
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_PRODUCTS':
          return { ...state, products: action.payload };
      case 'ADD_TO_CART':
          return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
          return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
          };
      default:
          return state;
  }
};

export default shopReducer;
