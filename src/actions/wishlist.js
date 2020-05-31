import { WISHLIST } from './actionTypes';

function setWishlistSuccess(products) {
  return {
    type: WISHLIST.SUCCESS,
    payload: products
  }
}

export const getWishlist = (payload) => async(dispatch) => {
  dispatch(setWishlistSuccess(payload));
}