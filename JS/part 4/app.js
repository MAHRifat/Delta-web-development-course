let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting app");
        break;
    }

    if(req == "list"){
        console.log("----------------------")
        for(task of todo){
            console.log(task);
        }
        console.log("----------------------")
    }else if(req == "add"){
        let task = prompt("please enter your task")
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("please enter the tasked index");
        todo.splice(idx, 1);
        console.log("tasked deleted");
    }else{
        console.log("wrong request");
    }

    req = prompt("please enter your request");


}

