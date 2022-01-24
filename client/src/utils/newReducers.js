import { createSlice } from '@reduxjs/toolkit';

export const ecommSlice = createSlice({
    name: 'ecomm',
    initialState: {
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    },
    reducers: {
        UPDATE_PRODUCTS: (state) => {
            products.push(state);
        },
    }
});

export const { UPDATE_PRODUCTS } = ecommSlice.actions;

export default ecommSlice.reducer;