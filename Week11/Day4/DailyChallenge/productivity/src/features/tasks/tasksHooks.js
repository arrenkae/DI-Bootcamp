import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { tasks, category, filterCategory } from './tasksSlice';

export const useTasksSelector = () => {
    const selectorTasks = createSelector([tasks, category], (tasks, category) => {
          if (category == -1) {
            return tasks;
          } else {
            return tasks.filter(task => task.category == category);
          }
    });
    return useSelector(selectorTasks);
};

export const useCompletedTasksSelector = () => {
  const selectorCompletedTasks = createSelector(tasks, (tasks) => {
      return tasks.filter(task => task.done);
  });
  return useSelector(selectorCompletedTasks);
};

export const useFilterCategory = () => {
  const dispatch = useDispatch();
  return useCallback((categoryId) => {
      dispatch(filterCategory(categoryId));
  }, [dispatch, filterCategory])
}