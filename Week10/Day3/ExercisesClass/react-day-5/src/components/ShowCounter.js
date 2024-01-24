import {useContext} from 'react';
import { AppContext } from '../App';
import Name from "./Name";


const ShowCounter = (props) => {
    const {count} = useContext(AppContext);
    return(
        <>
        <Name age={props.age} />
        <h2>Count: {count}</h2>
        </>
    )
}

export default ShowCounter;