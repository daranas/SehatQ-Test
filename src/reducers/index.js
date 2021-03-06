import { combineReducers } from 'redux';
import productReducer from './product';
import purchasedReducer from './purchased';
import wishlistReducer from './wishlist';

export default combineReducers({
    productReducer,
    purchasedReducer,
    wishlistReducer
});