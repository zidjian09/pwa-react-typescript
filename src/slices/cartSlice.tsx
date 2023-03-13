import { createSlice } from '@reduxjs/toolkit';

type cartState = any[];
const initialState: cartState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            let index = state.findIndex(({id}) => id === action.payload.id);
            state.splice(index, 1);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;