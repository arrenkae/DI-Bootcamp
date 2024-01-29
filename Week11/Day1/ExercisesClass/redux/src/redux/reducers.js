const initialState = {
    count: 44,
    text: 'hello'
};

export const INC = 'increment';
export const DEC = 'decrement';

export const counterReducer = (state=initialState, action) => {
    if(action.type === INC) {
        return {...state, count: state.count + action.payload, text: action.text}
    } else if (action.type == DEC) {
        return {...state, count: state.count - action.payload, text: action.text}
    }
    return {...state}
}