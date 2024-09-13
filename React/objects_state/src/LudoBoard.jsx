import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMOves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let [arr, setArr] = useState(["no moves"]);
    
    let updateBlue = ()=> {
        // moves.blue += 1;
        // setMOves({...moves, blue: moves.blue + 1});
        setMOves((preMove)=> {
            return {...preMove, blue: preMove.blue + 1};
        });
        
        setArr([...arr, "Blue moves"]);


    }
    return(
        <div>
            <h1>Game Begins</h1>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    );   
}