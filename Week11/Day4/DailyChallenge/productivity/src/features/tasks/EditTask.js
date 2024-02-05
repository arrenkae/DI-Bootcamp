import { useDispatch } from 'react-redux';
import { useState, useRef, memo } from "react";
import { editTask } from './tasksSlice';
import CategoryChoice from '../categories/CategoryChoice';

const EditTask = ({task}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [display, setDisplay] = useState('none');
    const inputRef = useRef();
    const categoryRef = useRef();
    const dispatch = useDispatch();

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
            <input type="text" ref={inputRef} defaultValue={task.name}/>
            <select name="editTaskCategorySelect" ref={categoryRef}>
                <CategoryChoice />
            </select>
            <button onClick={() => {
                if (inputRef.current.value) {
                    dispatch(editTask({id: task.id, newName: inputRef.current.value, newCategory: categoryRef.current.value}));
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

export default memo(EditTask);