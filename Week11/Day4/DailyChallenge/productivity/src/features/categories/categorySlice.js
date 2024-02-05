import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    categories: []
};

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push({ id: nanoid(), name: action.payload })
        },
        editCategory: (state, action) => {
            console.log(action.payload);
            const category = state.categories.find(category => category.id === action.payload.categoryId);
            if (category) {
                category.name = action.payload.newName;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(category => category.id != action.payload);
        }
    },
});

export const categories = (state) => state.categories.categories;

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;