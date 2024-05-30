function sum(a, b = 3){
    return a+b;
}

sum(2);
sum(22,45);

// spread -> expands an iterable into multiple values

console.log(..."rifat");  // it will print the indivusal char r i f a t

    // spread with array

let arr = [1,2,4,55,5,5,6];
let newarr = [...arr];

let char = [..."riofat"];
console.log(char);


let odd = [1,3,5,7];
let even = [2,4,6,8];

let nums = [...odd,...even];

// spread with objects literals

let data = {
    name: "rifat",
    age: 22
};

let datacopy = {...data, id: "cs2102048"};

// array into objects

let obj1 = {...arr}; // index are convert into key


// // /// /////// // rest /////////////
    // allows a function to take an indefinite number of arguments and bundle them in an array

function sums(...args) {
    return args.reduce((add, el) => add+el);
}
