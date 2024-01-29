import { useContext, useState, useRef } from "react";
import { PlannerContext } from "./DatePicker";

const TaskEdit = props => {
    const [display, setDisplay] = useState('none');
    const { date, edit } = useContext(PlannerContext);
    const index = props.index;
    const inputRef = useRef();

    const toggleInput = () => {
        if (display === 'none') {
            setDisplay('inline');
        } else {
            setDisplay('none');
        }
    }

    return (
        <>
        <button onClick={toggleInput}>✎</button>
        <div style={{display}}>
            <input type="text" ref={inputRef}/>
            <button onClick={() => {
                if (inputRef.current.value) {
                    edit(date, inputRef.current.value, index)
                }
                toggleInput();
            }}>Save</button>
        </div>
        </>
    )
};

export default TaskEdit;