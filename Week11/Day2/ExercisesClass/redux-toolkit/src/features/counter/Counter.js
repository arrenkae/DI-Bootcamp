import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { increment, decrement, reset, incrementByNumber, incrementWithPrepare } from './counterSlice';

const Counter = props => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const inputRef = useRef();
    const inputRefPrepare = useRef();

    return (
        <>  
            <h2>Count: {count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}> + </button>
                <button onClick={() => dispatch(decrement())}> - </button>
                <button onClick={() => dispatch(reset())}> Reset </button>
            </div>
            <div>
                Number: <input ref={inputRef} />
                <button onClick={() => dispatch(incrementByNumber(Number(inputRef.current.value)))}> Increment by number </button>
            </div>
            <div>
                Number: <input ref={inputRefPrepare} />
                <button onClick={() => dispatch(incrementWithPrepare(Number(inputRef.current.value), Number(inputRefPrepare.current.value)))}> Increment by number with Prepare </button>
            </div>
        </>
    )
}

export default Counter;