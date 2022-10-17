import { configureStore } from "@reduxjs/toolkit";
import { CartItemSlice } from "./cart";

export const store = configureStore({
    reducer: {
        cart: CartItemSlice,
    }
})