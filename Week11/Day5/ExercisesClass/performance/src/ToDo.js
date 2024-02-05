import { memo } from 'react';

const ToDo = ({todos, addTask}) => {
    console.log('todo render');
    return(
        <>
            <h2>ToDo</h2>
            <button onClick={addTask}>Add Task</button>
            {
                todos.map((task, index) => {
                    return <p key={index}>{index} - {task}</p>
                })
            }
        </>
    );
};

export default memo(ToDo);