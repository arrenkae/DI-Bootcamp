import { useState, useRef } from "react";

const TodoList = (props) => {
    const [todos, setTodos] = useState(['Wake up', 'Go to class', 'Do exercises']);
    const inputRef = useRef(null);

    const addTodo = (e) => {
        setTodos([...todos, inputRef.current.value]);
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((e, i) => i != index));
    }

    return(
        <div style={{textAlign: 'left', marginLeft: '30px'}}>
            <h1>To do:</h1>
            {
                todos.map((element, index) => {
                    return (
                    <ul>
                        <li>{element} <button style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}} onClick={() => removeTodo(index)}>✅</button></li>
                    </ul>
            )
            })
            }
            <h3>Add to list:</h3>
            <input type="text" ref={inputRef}/> <button onClick={addTodo}>Add</button>
        </div>
    )
}


export default TodoList;