import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    function increateCount(){
        setCount(++count);
        console.log(count);
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increateCount}>Increase counter</button>
        </div>
    );
}