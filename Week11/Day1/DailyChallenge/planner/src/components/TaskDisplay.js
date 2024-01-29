import { useContext } from "react";
import { PlannerContext } from "./DatePicker";
import TaskEdit from './TaskEdit';
import TaskDelete from './TaskDelete';

const TaskDisplay = props => {
    const { date, planner } = useContext(PlannerContext);

    return (
        <ul>
        {   
            planner[date].map((task, index) => {
                return (
                    <>
                    <li>{task}
                    <TaskEdit index={index}/>
                    <TaskDelete index={index}/>
                    </li>
                    </>
                )
        })
        }
        </ul>
    )
};

export default TaskDisplay;