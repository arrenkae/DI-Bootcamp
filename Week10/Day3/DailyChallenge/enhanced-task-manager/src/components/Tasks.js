import { useState, useEffect, useRef, createContext } from "react";
import './Tasks.css'
import Edit from './Edit'

export const TasksContext = createContext();

const Tasks = (props) => {
    const [tasks, setTasks] = useState([
        {task: 'Wake up', done: true, display: true, editing: false},
        {task: 'Go to class', done: true, display: true, editing: false},
        {task: 'Do exercises', done: false, display: true, editing: false}
    ]);
    const inputRef = useRef(null);

    const addTask = (e) => {
        setTasks([...tasks, {task: inputRef.current.value, done: false, display: true}]);
    }

    const completeTask = (index) => {
        setTasks(tasks.map((e, i) => i === index ? e.done ? {...e, done: false} : {...e, done: true} : e));
    }

    const removeTask = (index) => {
        setTasks(tasks.filter((e, i) => i != index));
    }

    const toggleEdit = (index) => {
        setTasks(tasks.map((e, i) => i === index ? e.editing ? {...e, editing: false} : {...e, editing: true} : e));
    }

    const displayAll = () => {
        setTasks(tasks.map(e => {
            return {...e, display: true};
        }));
    }

    const displayActive = () => {
        setTasks(tasks.map(e => e.done ? {...e, display: false} : {...e, display: true}));
    }

    const displayDone = () => {
        setTasks(tasks.map(e => e.done ? {...e, display: true} : {...e, display: false}));
    }

    return(
        <div>
            <h1>My tasks:</h1>
            <div className='filter'>
                <button onClick={displayAll}>All</button>
                <button onClick={displayActive}>Active</button>
                <button onClick={displayDone}>Completed</button>
            </div>
            <ul>
            {   
                tasks.map((element, index) => {
                    if (element.display) {
                        return (
                            <>
                            <li className={element.done ? 'done' : 'active'}>{element.task}
                            <button onClick={() => toggleEdit(index)}>✎</button>
                            <button onClick={() => completeTask(index)}>✔️</button>
                            <button onClick={() => removeTask(index)}>✖️</button>
                            </li>
                            {element.editing ? 
                            <TasksContext.Provider value={{ tasks, setTasks }}>
                            <Edit index={index}/>
                            </TasksContext.Provider>
                            : ''}
                            </>
                        )
                    }
                    
            })
            }
            </ul>
            <h3>Add task:</h3>
            <input type="text" ref={inputRef}/> <button onClick={addTask}>Add</button>
        </div>
    )
}


export default Tasks;