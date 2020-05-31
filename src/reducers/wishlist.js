import { WISHLIST } from '../actions/actionTypes';

const initialState = {
  productPromo: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST.SUCCESS:
      return {
        ...state,
        productPromo: [...state.productPromo, action.payload]
      }
    default:
      return state;
  }
}