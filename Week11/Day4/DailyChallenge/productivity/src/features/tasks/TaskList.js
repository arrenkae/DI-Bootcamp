import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addTask } from './tasksSlice';
import { addCategory, deleteCategory } from '../categories/categorySlice';
import { useTasksSelector, useCompletedTasksSelector, useFilterCategory } from "./tasksHooks";
import { useCategorySelector } from "../categories/categoryHooks";
import CategoryChoice from '../categories/CategoryChoice';
import ToggleButton from './ToggleButton';
import DeleteButton from './DeleteButton';
import EditTask from './EditTask';
import EditCategory from '../categories/EditCategory';
import './TaskList.css';

const TaskList = props => {
    const categories = useSelector(state => state.categories.categories);
    const tasks = useTasksSelector();
    const tasksCompleted = useCompletedTasksSelector();
    const currentCategory = useCategorySelector();
    const dispatch = useDispatch();
    const newTaskRef = useRef(null);
    const newCategoryRef = useRef(null);
    const categoryRef = useRef(null);
    const newTaskCategoryRef = useRef(null);

    const selectTasksByCategory = useFilterCategory();

    return (
        <div>
            <h1>My tasks</h1>
            <select name="categorySelect" ref={categoryRef} onChange={() => selectTasksByCategory(categoryRef.current.value)}>
                <CategoryChoice />
            </select>
            <button onClick={() => {
                if (categoryRef.current.value != -1) {
                    dispatch(deleteCategory(categoryRef.current.value));
                    selectTasksByCategory(-1);
                }
            }}>✖️</button>
            {
                currentCategory ? <EditCategory category={currentCategory}/> : ''
            }
            <ul>
            {tasks.length > 0 ? 
                tasks.map(task => {
                    const taskCategory = categories.find(category => task.category == category.id);
                    console.log(taskCategory);
                    return (
                        <li key={task.id} className={task.done ? 'done' : ''}>
                            {taskCategory ? <span className='taskCategory'>{taskCategory.name}</span> : ''}
                            {task.name}
                            <EditTask task={task} />
                            <ToggleButton task={task} />
                            <DeleteButton task={task} />
                        </li>
                    )
            }) : null
            }
            </ul>
            <h2>Completed tasks: {tasksCompleted.length}</h2>
            <h3>Add task:</h3>
            <input type="text" ref={newTaskRef}/>
            <select name="newTaskCategorySelect" ref={newTaskCategoryRef}>
                <CategoryChoice />
            </select>
            <button onClick={() => {
                if (newTaskRef.current.value) {dispatch(addTask({name: newTaskRef.current.value, categoryId: newTaskCategoryRef.current.value}))};
                newTaskRef.current.value = '';
                }}>Add</button>
            <h3>Add new category:</h3>
            <input type="text" ref={newCategoryRef}/> <button onClick={() => {
                if (newCategoryRef.current.value) {dispatch(addCategory(newCategoryRef.current.value))};
                newCategoryRef.current.value = '';
                }}>Add</button>
        </div>
    )
};

export default TaskList;