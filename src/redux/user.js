import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('user_') !== null ? JSON.parse(localStorage.getItem('user_')) : ""

const initialState = { value: items }

export const UserSlice = createSlice({
    name: 'userslice',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const email = action.payload
            state.value = email
            localStorage.setItem('user_', JSON.stringify(state.value))
        },

        deleteUser: (state, action) => {
            state.value = ''
            localStorage.setItem('user_', JSON.stringify(state.value))
        }
    }
})



export const { updateUser, deleteUser } = UserSlice.actions;


export default UserSlice.reducer;