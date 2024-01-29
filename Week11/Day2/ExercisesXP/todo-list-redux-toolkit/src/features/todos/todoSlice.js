import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ todo: action.payload, done: false })
        },
        toggle: (state, action) => {
            state[action.payload].done = !state[action.payload].done;
        },
        remove: (state, action) => {
            state.splice(action.payload, 1);
        }
    },
});

export const { add, toggle, remove } = todoSlice.actions;
export default todoSlice.reducer;