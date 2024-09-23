import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    let submitHandler = (e)=> {
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
        
    }
    return(
        <>
            <form action="" onSubmit={submitHandler}>
                <input type="text" onChange={(e)=> setTask(e.target.value)}/>
                <button>Add task</button>
            </form>
        </>
    )
}