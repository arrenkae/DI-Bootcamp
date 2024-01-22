import { useState } from 'react';

const Counter = (props) => {
    const[count, setCount] = useState(0);
    if(count > 5) {
        throw new Error('Oh no... that\'s too much')
    }
    return(
        <>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <p>{count}</p>
        </>
    )
}


export default Counter;