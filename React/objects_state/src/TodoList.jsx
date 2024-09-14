import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "" , id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=> {
        setTodos([...todos, {task: newTodo, id: uuidv4(), isDone: false}]);
    }

    let updateTaskValue = (event)=> {
        setNewTodo(event.target.value);
    }

    let deleteTask = (id)=>{
        setTodos((prevTodo)=> todos.filter((prevTodo)=> prevTodo.id != id));
    }

    let doneAll = ()=> {
       setTodos(
        todos.map((todo)=> {
            return{
                ...todo,
                isDone: true,
            };        
       }))
    }

    let styles = {textDecoration: 'line-through',};

    let doneOne = (id) => {
        setTodos((prevTodos)=> 
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return{
                        ...todo,
                        isDone: true,
                    };
                } 
                else {
                    return todo;
                }
            })
        );
    };
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
                            {todo.isDone ? <span style={styles}>{todo.task}</span> : <span>{todo.task}</span>} &nbsp;
                            <button onClick={()=> deleteTask(todo.id)} >delete</button>
                            &nbsp; &nbsp;
                            <button onClick={()=> doneOne(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>

            <br /><br />
            <button onClick={doneAll}>Done all</button>
        </div>
    )
}