import { useState } from "react"

export default function Form(){
    let [fullName, setFullName] = useState();

    function changeName(event){
        console.log(event.target.value);
        setFullName(event.target.value);
    }
    

    return(
        <form action="">
            <label htmlFor="fullname">Full name : </label>&nbsp;
            <input id="fullname" type="text" placeholder="write something" value={fullName} onChange={changeName}/>
            <button>Submit</button>
        </form>
    )
}