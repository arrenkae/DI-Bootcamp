const initialState = {
    todos: [
        {todo: 'Wake up', done: true},
        {todo: 'Eat breakfast', done: true},
        {todo: 'Do exercises', done: false},
    ]
};

export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';
export const DELETE = 'DELETE';

export const todoReducer = (state = initialState, action) => {
    if(action.type === ADD) {
        return {todos: [...state.todos, {todo: action.payload, done: false}]}
    } else if (action.type == TOGGLE) {
        return {todos: state.todos.map((element, index) => index === action.payload ? element.done ? {...element, done: false} : {...element, done: true} : element)}
    } else if (action.type == DELETE) {
        return {todos: state.todos.filter((element, index) => index != action.payload)}
    }
    return {...state};
}