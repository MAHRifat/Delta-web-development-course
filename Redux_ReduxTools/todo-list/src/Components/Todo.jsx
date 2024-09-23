import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    let deleteHandler = (e)=> {
        console.log(e.target.value);
        dispatch(deleteTodo(e.target.value));
    }
    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task} <button onClick={deleteHandler} value={todo.id}>Delete</button></li>
                ))}
            </ul>
        </>
    )
}