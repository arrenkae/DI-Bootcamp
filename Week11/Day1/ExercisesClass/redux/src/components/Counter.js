import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = props => {
    const {count, text} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <>  
            {/* <button onClick={() => props.dec(10)}> - </button> */}
            <button onClick={() => dispatch({type: 'decrement', payload: 10, text: 'decrement by 10'})}> + </button>
            <div>Count: {count} <p>{text}</p></div>
            <button onClick={() => dispatch(increment(1, 'increment by 1'))}> + </button>
            {/* <button onClick={() => props.setCount(10)}> + </button> */}
        </>
    )
}

// const mapStateToProps = (state) => {
//     console.log('storeState=>', state);
//     return {
//         count: state.counter.count,
//         text: state.counter.text
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCount: (value) => dispatch(increment(value, 'increment by ' + value)),
//         dec: (value) => dispatch(decrement(value, 'decrement by ' + value))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;