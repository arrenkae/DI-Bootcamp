import { useContext, useState, useRef } from "react";
import { addTask } from '../redux/actions';
import { PlannerContext } from "./Calendar";

const TaskAdd = props => {
    const { date, dispatch } = useContext(PlannerContext);
    const [errorMsg, setErrorMsg] = useState('');
    const inputRef = useRef();

    const showError = (message) => {
        setErrorMsg(message);
        setTimeout(() => { setErrorMsg('') }, 3000);
    }

    return (
        <div>
            <h3>Add task:</h3>
            <input type="text" ref={inputRef}/>
            <button onClick={() => {
                if (inputRef.current.value) {
                    dispatch(addTask(date, inputRef.current.value))
                } else {
                    showError('Please enter the task name');
                };
                inputRef.current.value = '';
            }}>Add</button>
            <span className='error'>{errorMsg}</span>
        </div>
    )
};

export default TaskAdd;