import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // counter/increment
        increment: (state) => {
            state.count += 1
        },
        // counter/decrement
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = initialState.count
        },
        incrementByNumber: (state, action) => {
            state.count += action.payload;
        },
        incrementWithPrepare: {
            reducer(state, action) {
                state.count += action.payload.a + action.payload.b;
            },
            prepare(num1, num2) {
                return {payload: { a:num1, b:num2 }}
            }
        }
    },
});

export const {increment, decrement, reset, incrementByNumber, incrementWithPrepare} = counterSlice.actions;
export default counterSlice.reducer;