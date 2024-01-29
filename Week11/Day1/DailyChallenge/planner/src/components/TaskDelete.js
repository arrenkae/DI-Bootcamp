import { useContext } from "react";
import { PlannerContext } from "./DatePicker";

const TaskDelete = props => {
    const { date, del } = useContext(PlannerContext);
    const index = props.index;

    return (
        <button onClick={() => del(date, index)}>✖️</button>
    )
};

export default TaskDelete;