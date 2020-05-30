import { PRODUCT } from '../actions/actionTypes';

const initialState = {
  pending: false,
  products: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      }
    case PRODUCT.FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      }
    case PRODUCT.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;