// DOM -> Document Object Model
   // The DOM represents a document with a logical tree
       // It allows us to manipulate / change webpage content (HTML elements)


console.dir(document);   // show as an object

// // // // //  Selecting Elements // // // // //


// getElementById  -> returns the element as an object or null(if not found)

console.dir(document.getElementById("mainImg"));

// getElementByClassName -> returns the elements as an HTML collection or empty collection(it not found)

console.dir(document.getElementsByClassName("oldImg"));

let smallImg = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImg.length ;i++){
    console.dir(smallImg[i]);
}


// getElementByTagName -> returns the elements as an HTML collection or empty collection(if not found)

console.dir(document.getElementsByTagName("p"));

// Query Selector -> allows us to use any Css selector

document.querySelector('p'); // selects first p element

document.querySelector('#myId'); // select first element with id = myId

document.querySelector('.myClass'); // select first element with class = myClass

document.querySelectorAll("p"); // selects all p elements

document.querySelector("div a");



// // // // // Menipulation // // // // //

// using properties and methods

    // innerText -> shows the visible text contained in a node
    // textContent -> shows all the full text (also show hidden text)
    // innerHTML -> shows the full markup

let para = document.querySelector("p");

// para.innerText = "abc";     // it will change the p tag content
// para.innerHTML = "ab <b> c <b/>";  // it will change the p tag using HTML

let heading = document.querySelector("h1");

heading.innerHTML = `<u> ${heading.innerText} </u>`;




// manipulateing attributes -> getAttribute(attr) / setAttribute(attr, val)

let img = document.querySelector("img");

img.getAttribute("id");  // get the img id attribute name

img.setAttribute("id", "spidermanimg");  // set the img id to spidermanimg



// manipulateing style  -> obj.style

let heading = document.querySelector("h1");

heading.style.color = "green";
heading.style.backgroundColor = "gray";

let links = document.querySelectorAll(".box a");

for(let i=0;i<links.length ; i++){
    links[i].style.color = "yellow";
}

// access only inline style...can't accrsss the css style 

// using classList

// classList.add() to add new class
// classList.remove() to remove classes
// classList.contains() to check if class exits
// classList.toggle() to toggle between add & remove -> toggle work like a switch

// we use classList expect of setAttribute beacuase setAttribute reset all class to one value

img.classList;

img.classList.add("abc");
img.classList.remove("abc");
img.classList.contains("abc");
img.classList.toggle("abc"); // abc class beacuase it not exitst before




// Navigation -> parentElement / children / previousElementSibling / nextElementSibling

let h4 = document.querySelector("h4");

console.dir(h4.parentElement);

let box = document.querySelector(".box");

console.dir(box.children);

console.dir(box.previousElementSibling);
console.dir(box.nextElementSibling);




// adding elements

// document.createElement("p");

// appendChild(element)  // append elemnt as a last child
// append(element)   // append any thing like text,elemtn etc in last
// prepend(element)   // append any thing like text,elemtn etc in first
// insertAdjacent(where, element)


let newP = document.createElement("p");

console.dir(newP);

newP.innerText = "hi, I am new p";

let body = document.querySelector("body");

body.appendChild(newP);

let btn = document.createElement("button");
btn.innerText = "click me!";

newP.append(btn);  // add button to newp in last


para.insertAdjacentElement('beforebegin' , btn);  /// para suru hoyar age btn add hobe

para.insertAdjacentElement('afterbegin', newP); // add newp to the para as a first child

para.insertAdjacentElement('beforeend', btn); // add btn to the para as a last child

para.insertAdjacentElement('afterend', btn); // add btn after the para




// removing elements

// removeChile(element)
// remove(element)


btn.remove();

body.removeChild(para);




















