import actionTypes from "../actionTypes";
const initialState = {
  selectedProducts: [],
};

export const productsBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CARD:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, { ...action.payload }],
      };
    case actionTypes.UPDATED_AMOUNT:
      return {
        ...state,
        selectedProducts: state.selectedProducts.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case actionTypes.REMOVE_TO_CARD:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
