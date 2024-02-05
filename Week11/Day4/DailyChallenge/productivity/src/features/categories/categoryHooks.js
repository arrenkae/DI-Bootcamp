import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { categories } from './categorySlice';
import { category } from '../tasks/tasksSlice';

export const useCategorySelector = () => {
    const selectorCategory = createSelector([categories, category], (categories, category) => {
        if (category == -1) {
            return null;
          } else {
            return categories.find(element => element.id == category);
          }
    });
    return useSelector(selectorCategory);
};