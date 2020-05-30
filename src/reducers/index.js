import { combineReducers } from 'redux';
import productReducer from './product';
import purchasedReducer from './purchased';

export default combineReducers({
    productReducer,
    purchasedReducer
});