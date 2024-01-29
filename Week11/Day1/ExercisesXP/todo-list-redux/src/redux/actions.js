import { ADD, TOGGLE, DELETE } from './reducers'

export const addTodo = (text) => {
    return {
        type: ADD,
        payload: text,
    };
};

export const toggleComplete = (index) => {
    return {
        type: TOGGLE,
        payload: index,
    };
};

export const removeTodo = (index) => {
    return {
        type: DELETE,
        payload: index,
    };
};