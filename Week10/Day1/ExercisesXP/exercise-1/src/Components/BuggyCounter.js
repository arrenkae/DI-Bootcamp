import { useState } from 'react';

const BuggyCounter = (props) => {
    const[counter, setCount] = useState(0);
    if(counter > 5) {
        throw new Error('I crashed!')
    }

    const handleClick = () => {setCount(counter + 1)};

    return(
        <>
        <button onClick={handleClick}>Add</button>
        <p>{counter}</p>
        </>
    )
}


export default BuggyCounter;