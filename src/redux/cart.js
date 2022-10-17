import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('cartItems_') !== null ? JSON.parse(localStorage.getItem('cartItems_')) : []

const initialState = { value: items }

export const CartItemSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItems: (state,action) => {
            const NewItem = action.payload
            
        }
    }
})


//export const { updateCartItems } = CartItemSlice.actions;


export default CartItemSlice.reducer;