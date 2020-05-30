import { PURCHASED } from '../actions/actionTypes';

const initialState = {
  pending: false,
  products: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PURCHASED.PENDING:
      return {
        ...state,
        pending: true,
      }
    case PURCHASED.SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      }
    case PURCHASED.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}