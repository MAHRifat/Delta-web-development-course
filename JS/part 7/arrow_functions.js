const sum = (a, b) => {
    console.log(a+b);
};

// Implicit return

const mul = (a,b) => (
    a*b
);

const cude = (n) => n*n*n;
    

// set timeout  -> setTimeout( function, timeout)

setTimeout ( ()=> {               // 4s por colsole exicute hobe
    console.log("Welcome to timeout");
}, 4000);


// set Interval -> setInterval(function, timeout)

let id =setInterval( ()=> {           // 2s por por colsole exicute hotei thakbe
    console.log("setInterval");
}, 2000);

clearInterval(id);     // stop the interval


// this with arrow function                                    // this with normal function
// lexical scope , depend on parant's scope -> this              // scope depend on calling object -> this 


const student = {
    name: "Rifat",
    marks: 432,
    prop: this,     // global scope
    getName: function() {
        console.log(this);  // object scope
        return this.name;
    },
    getmarks: ()=> {
        console.log(this);  // parent's scope -> parent = student -> student er scope holo global -> lexical scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this);  // student object
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);  // window object
        }, 200);
    }
};

