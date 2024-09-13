import { useState } from "react"

export default function ToDoList(){
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=> {
        setTodos([...todos, newTodo]);
    }

    let updateTaskValue = (event)=> {
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTaskValue}/>
            <br /> <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /> <br /> <br /> <hr />
            <h3>ToDo List</h3>
            <ul>
                {
                    todos.map((task)=> ( 
                        <li>{task}</li>
                    ))
                }
            </ul>
        </div>
    )
}