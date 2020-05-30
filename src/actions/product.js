import { PRODUCT } from './actionTypes';
import API from '../helpers/Api';

function fetchProductsPending() {
  return {
    type: PRODUCT.FETCH_PENDING
  }
}

function fetchProductsSuccess(products) {
  return {
    type: PRODUCT.FETCH_SUCCESS,
    payload: products
  }
}

function fetchProductsError(error) {
  return {
    type: PRODUCT.FETCH_ERROR,
    error: error
  }
}

export const fetchProducts = (payload) => async(dispatch) => {
  dispatch(fetchProductsPending());
  try {
    const response = await API.get(`/home`);
    const { data } = response.data[0];
    dispatch(fetchProductsSuccess(data));
    return data;
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
}