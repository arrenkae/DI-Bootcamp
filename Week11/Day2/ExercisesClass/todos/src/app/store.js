import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../features/tasks/tasksReducer';

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});

export default store;