function doSomthing(){
    console.log("Button was clicked");
}

function Button(){
    return(
        <div>
            <button onClick={doSomthing} >click!</button>
        </div>
    )
}

export {Button};