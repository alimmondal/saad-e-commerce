import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) =>{
        const {payload} = action;
        const {cartProduct} = payload;

        // check if the product is already in the cart
        const isItemInCart = state.find((item) => item.id === cartProduct.id);

        //if exists, update the cart
        if(isItemInCart){
            return state.map(item => item.id === cartProduct.id 
                ? {...item, ...cartProduct} 
                : item
                );
        }else{
            return [...state, {...cartProduct}];
        }
    },
    deleteFromCart: (state, action) =>{
        const {payload} = action;
        return state.filter((item) =>item.id === payload.id)
    },
    reset: () =>initialState,
  },
});

export const {addToCart, deleteFromCart, reset} = cartSlice.actions;

export default cartSlice.reducer;
