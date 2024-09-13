import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "" , id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=> {
        setTodos([...todos, {task: newTodo, id: uuidv4()}]);
    }

    let updateTaskValue = (event)=> {
        setNewTodo(event.target.value);
    }

    let deleteTask = (id)=>{
        setTodos((prevTodo)=> todos.filter((prevTodo)=> prevTodo.id != id));
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
                    todos.map((todo)=> ( 
                        <li key={todo.id}>
                            <span>{todo.task}</span> &nbsp;
                            <button onClick={()=> deleteTask(todo.id)} >delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}