// Scope determines the accessibility of variables, objects and funciton 
// different parts of the code.

// Scope -> function, block, lexical and global scope


let sum = 34;  // global scope

function calsum(a,b){
    let sum = a + b;  // function scope
    console.log(sum);
}

calsum(3,3);
console.log(sum);

{
    let a =3455;  // block scope
}

console.log(a);

{ 
    let b =4;  // lexical scope -> nested a use hoy
    {
        console.log(b);
        let c = 5;
    }
    console.log(c);   // not possible 
}

// function expression

let s = function(a, b){
    return a + b;
};

// high order function

    //  -> takes one or multiple functions as arguments

function multipleGreet(func, n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet, 2);

    // -> returns a function

    