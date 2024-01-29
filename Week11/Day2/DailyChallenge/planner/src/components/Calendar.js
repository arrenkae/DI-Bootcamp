import { useRef, useEffect, useState, createContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './Planner.css';

export const PlannerContext = createContext();

const Calendar = props => {
    const planner = useSelector(state => state.planner);
    const dispatch = useDispatch();
    const [date, setDate] = useState();
    const dateRef = useRef();

    useEffect(() => {
        const today = new Date();
        setDate(today.toISOString().slice(0,10));
    }, [])

    return (
        <div>
            <input type="date" ref={dateRef} defaultValue={date} onChange={() => {setDate(dateRef.current.value)}}/>
            <h1>Tasks for {date}:</h1>
                <PlannerContext.Provider value={{
                    date,
                    planner,
                    dispatch }}>
                    {
                        planner[date] ?
                        <TaskList /> : <h4>None</h4>
                    }
                    <AddTask />
                </PlannerContext.Provider>
        </div>
    )
};

export default Calendar;