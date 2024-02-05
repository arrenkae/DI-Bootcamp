import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    category: -1
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: nanoid(), name: action.payload.name, category: action.payload.categoryId, done: false })
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
              task.done = !task.done;
            }
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
              task.name = action.payload.newName;
              task.category = action.payload.newCategory;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id != action.payload);
        },
        deleteCategoryFromTasks: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.category === action.payload) {
                    task.category = -1;
                }
            });
        },
        filterCategory: (state, action) => {
            state.category = action.payload;
        }
    },
});

export const tasks = (state) => state.tasks.tasks;
export const category = (state) => state.tasks.category;

export const { addTask, toggleTask, editTask, deleteTask, filterCategory, deleteCategoryFromTasks } = taskSlice.actions;
export default taskSlice.reducer;