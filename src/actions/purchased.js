import { PURCHASED } from './actionTypes';

function setPurchasedSuccess(products) {
  return {
    type: PURCHASED.SUCCESS,
    payload: products
  }
}

export const getPurchased = (payload) => async(dispatch) => {
  dispatch(setPurchasedSuccess(payload));
}