import { useEffect, useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    function incCount(){
        setCount((currCount)=> currCount+1);
    };

    useEffect(function sideEffect(){
        console.log("This is the side effect");
    }, [count]);

    return(
        <div> 
            <button onClick={incCount}>Count: {count}</button>
        </div>
    )
};


