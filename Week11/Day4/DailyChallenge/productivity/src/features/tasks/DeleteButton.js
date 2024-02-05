import { deleteTask } from './tasksSlice';
import { useDispatch } from "react-redux";
import { memo } from 'react';

const DeleteButton = ({task}) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(deleteTask(task.id))}>✖️</button>
    )
}

export default memo(DeleteButton);