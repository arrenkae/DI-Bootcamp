import { toggleTask } from "./tasksSlice";
import { useDispatch } from "react-redux";
import { memo } from 'react';

const ToggleButton = ({task}) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleTask(task.id))}>✔️</button>
    )
}

export default memo(ToggleButton);