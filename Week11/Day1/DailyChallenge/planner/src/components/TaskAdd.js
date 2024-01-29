import { useContext, useRef } from "react";
import { PlannerContext } from "./DatePicker";

const TaskAdd = props => {
    const { date, add } = useContext(PlannerContext);
    const inputRef = useRef();

    return (
        <div>
        <h3>Add task:</h3>
        <input type="text" ref={inputRef}/> <button onClick={() => {
            if (inputRef.current.value) {add(date, inputRef.current.value)};
            inputRef.current.value = '';
            }}>Add</button>
        </div>
    )
};

export default TaskAdd;