import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { add, toggle, remove } from './todoSlice';
import './TodoList.css';

const TodoList = props => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    return (
        <div>
            <h1>To do:</h1>
            <ul>
            {   
                todos.map((todo, index) => {
                    return (
                        <>
                        <li className={todo.done ? 'done' : ''}>{todo.todo}
                        <button onClick={() => dispatch(toggle(index))}>✔️</button>
                        <button onClick={() => dispatch(remove(index))}>✖️</button>
                        </li>
                         </>
                    )
            })
            }
            </ul>
            <input type="text" placeholder='Add to list' ref={inputRef}/> <button onClick={() => {
                if (inputRef.current.value) {dispatch(add(inputRef.current.value))};
                inputRef.current.value = '';
                }}>Add</button>
        </div>
    )
};

export default TodoList;