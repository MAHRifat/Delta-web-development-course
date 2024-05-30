let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", ()=> {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    input.value = "";
});


let delBtns = document.querySelectorAll(".delete");

console.log(delBtns);

for(dlBn of delBtns){ 
    dlBn.addEventListener("click", function () {    // this is not work on new added task
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}


// event delegation 
    //-> new element e event lestener apply hoy na oita remove er jonno event delegation use kore hoy
    // -> notun element e o puraton element er event listner add korte use kora hoy
    // -> we use bubbling in it

    ul.addEventListener("click", (event)=> {
        console.log(event.target.nodeName);  // which element we clicked it will show us
        if(event.target.nodeName == "BUTTON"){
            let item = event.target.parentElement;
            item.remove();
        }
    });





