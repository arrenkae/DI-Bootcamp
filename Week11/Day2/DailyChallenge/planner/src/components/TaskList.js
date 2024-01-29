import { useContext } from "react";
import { PlannerContext } from "./Calendar";
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const TaskList = props => {
    const { date, planner } = useContext(PlannerContext);

    return (
        <ul>
        {   
            planner[date].map((task, index) => {
                return (
                    <>
                    <li>{task}
                    <DeleteTask index={index}/>
                    <EditTask index={index} task={task}/>
                    </li>
                    </>
                )
        })
        }
        </ul>
    )
};

export default TaskList;