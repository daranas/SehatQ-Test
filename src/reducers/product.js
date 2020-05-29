import { PRODUCT } from '../actions/actionTypes';

const initialState = {
  error: false,
  result: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT.ADD:
      return {
        ...state,
        error: false,
        result: action.payload.data
      }
    default:
      return state;
  }
}