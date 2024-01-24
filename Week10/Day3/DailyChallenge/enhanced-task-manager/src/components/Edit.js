import { useContext, useRef } from 'react';
import { TasksContext } from "./Tasks";

const Edit = (props) => {
    const { tasks, setTasks } = useContext(TasksContext);
    const index = props.index;
    const inputRef = useRef(null);

    const editTask = (index) => {
        setTasks(tasks.map((e, i) => i === index ? {...e, task: inputRef.current.value, editing: false} : e));
    }
    
    return(
        <>
            <input type="text" ref={inputRef}/><button onClick={() => editTask(index)}>Save</button>
        </>
    )
}


export default Edit;