import { useEffect, useState } from "react";

export default function Joker(){
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke, setJoke] = useState({});

    const getNewJoke = async () => {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        
    }

    useEffect(() => {async function createFirstJoke(){
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    createFirstJoke();
    }, []);
    return(
        <div>
            <h1>Joker!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New joke</button>
        </div>
    )
}