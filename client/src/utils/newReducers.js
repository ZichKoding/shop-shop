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
            
        }
    }
});