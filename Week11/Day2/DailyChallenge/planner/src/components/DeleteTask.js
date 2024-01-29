import { useContext } from "react";
import { deleteTask } from '../redux/actions';
import { PlannerContext } from "./Calendar";

const DeleteTask = props => {
    const { date, dispatch } = useContext(PlannerContext);
    const index = props.index;

    return (
        <button onClick={() => dispatch(deleteTask(date, index))}>✖️</button>
    )
};

export default DeleteTask;