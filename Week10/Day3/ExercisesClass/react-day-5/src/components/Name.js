import {useContext} from 'react';
import { AppContext } from '../App';
import { DisplayContext } from './Display';

const Name = (props) => {
    const {name} = useContext(AppContext);
    const {email} = useContext(DisplayContext);

    return(
        <h1>{name} {props.age} {email}</h1>
    )
}


export default Name;