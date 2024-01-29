import Increment from "./Increment";
import { useContext } from "react";
import { AppContext } from './App';

const Counter = props => {
    const {count} = useContext(AppContext);
    return (
        <>
            Count: {count}
            <Increment />
        </>
    )
}

export default Counter;