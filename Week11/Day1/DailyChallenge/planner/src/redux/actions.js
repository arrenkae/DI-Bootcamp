import { ADD, EDIT, DELETE } from './reducers'

export const addTask = (date, task) => {
    return {
        type: ADD,
        date,
        task
    };
};

export const editTask = (date, task, index) => {
    return {
        type: EDIT,
        date,
        task,
        index
    };
};

export const deleteTask = (date, index) => {
    return {
        type: DELETE,
        date,
        index
    };
};