import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK, EDIT_TASK } from './tasksReducer';
import './tasks.css';

const TasksList = (props) => {
    const tasks = useSelector(state => state.tasks);
    const addRef = useRef();
    const [filter, setFilter] = useState('all')

    const dispatch = useDispatch();

    const filterTasks = tasks.filter(task => {
        if (filter === 'all') return task;
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
    })

    console.log(tasks);
    return (
        <>
        <div>
            <h1>Tasks List</h1>
        </div>
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('active')}>Active</button>
        </div>
        <input type="text" placeholder='Add a new task' ref={addRef}/>
        <button onClick={() => {
            dispatch({type: ADD_TASK, text: addRef.current?.value});
            addRef.current.value = '';
            }}>Add</button>
        {
            filterTasks.map(task => {
                return <div key={task.id} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => {
                        dispatch({type: COMPLETE_TASK, id: task.id})
                    }}>{task.text}</span>
                    <button onClick={() => {
                        dispatch({type: REMOVE_TASK, id: task.id})
                    }}>Remove</button>
                </div>
            })
        }
        </>
    );
};

export default TasksList;