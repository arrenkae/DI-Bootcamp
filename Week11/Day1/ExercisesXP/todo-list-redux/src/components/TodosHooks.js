import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Todos.css';
import { addTodo, toggleComplete, removeTodo } from '../redux/actions';

const TodosHooks = props => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    return (
        <div>
            <h1>My tasks:</h1>
            <ul>
            {   
                todos.map((element, index) => {
                    return (
                        <>
                        <li className={element.done ? 'done' : 'active'}>{element.todo}
                        <button onClick={() => dispatch(toggleComplete(index))}>✔️</button>
                        <button onClick={() => dispatch(removeTodo(index))}>✖️</button>
                        </li>
                         </>
                    )
            })
            }
            </ul>
            <h3>Add task:</h3>
            <input type="text" ref={inputRef}/> <button onClick={() => dispatch(addTodo(inputRef.current.value))}>Add</button>
        </div>
    )
};

export default TodosHooks;