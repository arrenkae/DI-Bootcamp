import { INC, DEC } from './reducers'

export const increment = (value, text) => {
    return {
        type: INC,
        payload: value,
        text
    };
};

export const decrement = (value, text) => {
    return {
        type: DEC,
        payload: value,
        text
    };
};