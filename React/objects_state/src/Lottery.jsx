import { useState } from "react"

export default function Lottery(){
    let[storeTicket, setStoreTicket] = useState([]);
    let [newnum, setNewNum] = useState();
    let [winners, setWinners] = useState([]);

    function generateNewNum(){
        let randomNumber = Math.floor(Math.random() * 900) + 100;
        console.log(randomNumber);
        setNewNum(randomNumber);
        setStoreTicket((preTickets)=>{
            // console.log(preTickets);
            return(
                [...preTickets, randomNumber]
            );
        });
    };

    function findWinner(){
        return(
            storeTicket.map((ticket)=> {
                let hundreds = Math.floor(ticket / 100); 
                let tens = Math.floor((ticket % 100) / 10);
                let units = ticket % 10;
                let sumOfDigits = hundreds + tens + units;
                console.log(sumOfDigits);
                if(sumOfDigits == 15){
                    setWinners([...winners, ticket]);
                }
            })
        );
    };
    return(
        <div>
            <h3>Lottery Ticket = {newnum}</h3>
            <button onClick={generateNewNum}>Get New Ticket</button>
            <br /> <br /> <br />
            <button onClick={findWinner}>Gets the Winners</button>

            <ol>           
                {
                    winners.map((ticket)=> ( 
                        <li>
                           <h4>{ticket}</h4>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
};