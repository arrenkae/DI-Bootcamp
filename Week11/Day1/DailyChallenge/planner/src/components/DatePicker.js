import { useRef, useEffect, useState, createContext } from "react";
import { connect } from 'react-redux';
import { addTask, editTask, deleteTask } from '../redux/actions';
import TaskDisplay from './TaskDisplay';
import TaskAdd from './TaskAdd';
import './Planner.css';

export const PlannerContext = createContext();

const DatePicker = props => {
    const [date, setDate] = useState();
    const dateRef = useRef();

    useEffect(() => {
        const today = new Date();
        setDate(today.toISOString().slice(0,10));
    }, [])

    return (
        <div>
            <input type="date" ref={dateRef} value={date} onChange={() => {setDate(dateRef.current.value)}}/>
            <h1>Tasks for {date}:</h1>
                <PlannerContext.Provider value={{
                    date,
                    planner: props.planner,
                    add: props.add,
                    edit: props.edit,
                    del: props.del }}>
                    {
                        props.planner[date] ?
                        <TaskDisplay /> : <h4>None</h4>
                    }
                    <TaskAdd />
                </PlannerContext.Provider>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        planner: state.planner,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (date, task) => dispatch(addTask(date, task)),
        edit: (date, task, index) => dispatch(editTask(date, task, index)),
        del: (date, index) => dispatch(deleteTask(date, index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);