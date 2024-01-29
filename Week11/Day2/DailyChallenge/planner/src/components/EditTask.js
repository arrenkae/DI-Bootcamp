import { useContext, useState, useRef } from "react";
import { editTask } from '../redux/actions';
import { PlannerContext } from "./Calendar";

const EditTask = props => {
    const { date, dispatch } = useContext(PlannerContext);
    const { index, task } = props;
    const [display, setDisplay] = useState('none');
    const [errorMsg, setErrorMsg] = useState('');
    const inputRef = useRef();

    const toggleInput = () => {
        if (display === 'none') {
            setDisplay('inline');
        } else {
            setDisplay('none');
        }
    }

    const showError = (message) => {
        setErrorMsg(message);
        setTimeout(() => { setErrorMsg('') }, 3000);
    }

    return (
        <>
        <button onClick={toggleInput}>✎</button>
        <div style={{display}}>
            <input type="text" ref={inputRef} defaultValue={task}/>
            <button onClick={() => {
                if (inputRef.current.value) {
                    dispatch(editTask(date, inputRef.current.value, index));
                    toggleInput();
                } else {
                    showError('Please enter the new task name');
                }
            }}>Save</button>
            <span className='error'>{errorMsg}</span>
        </div>
        </>
    )
};

export default EditTask;