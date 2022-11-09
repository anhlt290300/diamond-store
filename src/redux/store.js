import { configureStore } from "@reduxjs/toolkit";

import CartItemSlice from './cart.js'
import UserSlice from "./user.js";

export default configureStore({
    reducer: {
        cartItems: CartItemSlice,
        userslice: UserSlice
    }
})