import { configureStore } from "@reduxjs/toolkit";

import CartItemSlice from './cart.js'

export default configureStore({
    reducer: {
        cartItems: CartItemSlice
    }
})