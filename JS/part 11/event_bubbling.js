// event bubbling -> child e kono event listener add korle oita parante e o cole jabe

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", ()=> {
    console.log("div was clicked");
});


ul.addEventListener("click", (event)=> {
    event.stopPropagation();  // it was stop the event bubbling
    console.log("ui was clicked");
});

for(li of lis){
    li.addEventListener("click", ()=> {
        console.log("li was clicked");
    });
}


