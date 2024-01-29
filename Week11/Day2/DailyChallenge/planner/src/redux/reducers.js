export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';

export const plannerReducer = (state = {'2024-01-29': ['Wake up', 'Eat breakfast']}, action) => {
    switch (action.type) {
        case ADD:
            return {...state, [action.date]: state[action.date] ? [...state[action.date], action.task] : [action.task]}
        case EDIT:
            return {...state, [action.date]: state[action.date].map((task, index) => index === action.index ? action.task : task )}
        case DELETE:
            return {...state, [action.date]: state[action.date].filter((task, index) => index != action.index )};
        default:
            return state;
    };
};
