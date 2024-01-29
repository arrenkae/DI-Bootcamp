import { useRef } from "react";
import { connect } from 'react-redux';
import './Todos.css';
import { addTodo, toggleComplete, removeTodo } from '../redux/actions';

const Todos = props => {
    const inputRef = useRef(null);

    return (
        <div>
            <h1>My tasks:</h1>
            <ul>
            {   
                props.todos.map((element, index) => {
                    return (
                        <>
                        <li className={element.done ? 'done' : 'active'}>{element.todo}
                        <button onClick={() => props.toggle(index)}>✔️</button>
                        <button onClick={() => props.del(index)}>✖️</button>
                        </li>
                         </>
                    )
            })
            }
            </ul>
            <h3>Add task:</h3>
            <input type="text" ref={inputRef}/> <button onClick={() => props.add(inputRef.current.value)}>Add</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (todo) => dispatch(addTodo(todo)),
        toggle: (index) => dispatch(toggleComplete(index)),
        del: (index) => dispatch(removeTodo(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);