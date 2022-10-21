import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('cartItems_') !== null ? JSON.parse(localStorage.getItem('cartItems_')) : []

const initialState = { value: items }

export const CartItemSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItems: (state, action) => {

            const newItem = action.payload

            const count = findItem(state.value, newItem)

            if (count.length > 0) {
                state.value.forEach(element => {
                    if (element.path === count[0].path) {
                        element.quantity += newItem.quantity
                    }
                });
                localStorage.setItem('cartItems_', JSON.stringify(state.value))
            } else {
                state.value = [...state.value, {
                    ...newItem,
                }]

                localStorage.setItem('cartItems_', JSON.stringify(state.value))
            }

        },
        updateItems: (state, action) => {
            const data = action.payload
            let arr = []
            state.value.forEach(element => {
                if (element.path === data.path) {
                    element.quantity = data.quantity
                }
            })

            localStorage.setItem('cartItems_', JSON.stringify(state.value))

        },
        deleteItems: (state, action) => {
            const arr = state.value
            const item_path = action.payload

            for (let i = 0; i < state.value.length; i++) {
                if (state.value[i].path === item_path) arr.splice(i, 1)
            }
        }
    }
})

const findItem = (arr, item) => arr.filter(e => e.path === item.path)

const deleteItem = (arr, item) => arr.filter(e => e.path !== item.path)

const sortItems = (arr) => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const { addItems, updateItems, deleteItems } = CartItemSlice.actions;


export default CartItemSlice.reducer;