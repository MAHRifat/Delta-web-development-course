function doSomthing(){
    console.log("Button was clicked");
}

function printMouseOver(event){
    console.log("Mouse over work");
    console.log(event);
}

function Button(){
    return(
        <div>
            <button onClick={doSomthing} >click!</button>
            <p onMouseOver={printMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sunt.</p>
        </div>
    )
}

export {Button};