import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/tasksSlice";
import categoryReducer from "../features/categories/categorySlice"

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoryReducer
  },
});

export default store;