// Events are signals that something has occurred. (user inputs / actions)

//  Dom events

    // onclick -> when an element is clicked

    let btn = document.querySelector("button");
    console.dir(btn);

    btn.onclick = () => {
        console.log("button was clicked");
        sayHello();
    };

    function sayHello(){
        console.log("Hello");
    }

    // onmouseenter -> when mouse enters an element

    btn.onmouseenter =() => {
        console.log("you entered a button");
    };


    // event listener -> addEventListener

    // we use event listener to because we can use it savaral time

    btn.addEventListener("click", ()=> {
        console.log("clicked me");
    });
    btn.addEventListener("click",()=> {
        console.log("clicked me2");
    });


    // this in event listeners
        // -> When 'this' is used in a callback of event handler of something, it refers to that something.

    btn.addEventListener("click", ()=> {
        console.log(this);  // this means the html code of btn
        console.dir(this); // this print the btn object
        console.dir(this.innerText); // it print the innerText of btn
    });




    // keyboard events

    let int = document.querySelector("input");

    int.addEventListener("keydown", ()=>{
        console.log("key was pressed");
    });

    int.addEventListener("keyup", ()=>{
        console.log("released the key");
    });

    int.addEventListener("keypress", (event)=> {
        console.log(event);
        console.log(event.key);
        console.log(event.code);
        console.log("key was pressed");
    });


    int.addEventListener("keydown", (event)=> {
        console.log("code =", event.code);
        if(event.code == "ArrowUp"){
            console.log("Move forward");
        }else if(event.code ==  "ArrowDoen"){
            console.log("Move downward");
        }else if(event.code == "ArrowRight"){
            console.log("Move Right");
        }else if(event.code == "ArrowLeft"){
            console.log("Move left");
        }else{
            console.log("worng key was pressed");
        }
    });





    // Form events

    let form = document.querySelector("form");

    // form.addEventListener("submit", (event)=> {
    //     event.preventDefault();   // default action thamate use kora hoy
    //     alert("form submitted");
    // });


    // Extracting form data

    form.addEventListener("submit", (event)=> {
        event.preventDefault();   // default action thamate use kora hoy
        
        let inp = document.querySelector(".input");
        console.dir(inp);
        console.log(inp.value);
    });




    // change event -> initial and final er change detact kore
        // -> The change event occurs when the value of an element has been changed (only works on <input>,<textarea> and <select> elements)

        let user = document.querySelector(".input");

        user.addEventListener("change", ()=> {
            console.log(" change  evnet");
            console.log("final value = ", user.value);
        });


    // input event  -> every moment er change detect kore
        // -> The input event fires when the value of an <input> , <select> or <textarea> elemntt has been changed.

        user.addEventListener("input", ()=> {
            console.log("input event");
            console.log("final value = ", user.value);
        });
