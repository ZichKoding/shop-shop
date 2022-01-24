import { configureStore } from '@redux/toolkit';
import ecommReducer from './newReducers/ecommSlice';

export default configureStore({
    reducer: {
        updateProducts: UPDATE_PRODUCTS
    }
});