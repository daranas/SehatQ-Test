import { PURCHASED } from './actionTypes';

function setProductsPending() {
  return {
    type: PURCHASED.PENDING
  }
}

function setProductsSuccess(products) {
  return {
    type: PURCHASED.SUCCESS,
    payload: products
  }
}

function setProductsError(error) {
  return {
    type: PURCHASED.ERROR,
    error: error
  }
}

export const fetchProducts = (payload) => async(dispatch) => {
  dispatch(setProductsPending());
  try {
    const response = await API.get(`/home`);
    const { data } = response.data[0];
    dispatch(setProductsSuccess(data));
    return data;
  } catch (error) {
    dispatch(setProductsError(error));
  }
}