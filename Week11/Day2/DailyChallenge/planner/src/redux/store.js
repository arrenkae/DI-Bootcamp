import { configureStore } from '@reduxjs/toolkit';
import { plannerReducer } from './reducers';

const store = configureStore({
    reducer: {
        planner: plannerReducer
    }
});

export default store;