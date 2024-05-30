// Array Methods

//     . forEach
//     . map
//     . filter
//     . some
//     . every
//     . reduce


// forEach    -> work like a for loop

let arr = [1,2,3,4];

arr.forEach(function(el){
    console.log(el);
});


let ar = [
    {name: "rifat",
        marks: 94
    },
    {
        name: "nila",
        marks: 89
    }
]

ar.forEach((el) => {
    console.log(el.marks);
});


// map  -> return new array 

let nam = [1,2,3,4];

let newNum = nam.map((el) => {
    return el *2;
});


// filter -> return new array with the seticfiction the condition 

let nums = [1,2,3,4,5,6,7];

let even = nums.filter( (num) => {
    (num % 2 == 0)
});

let grater5 = nums.filter( (num) => {
    return num > 5;
});


// every -> return true if every element of array gives true for some function. else returns flase

nums.every( (el) => {   // ans was false because every element not saticfies the condition
    (el%2 == 0)
});


// some -> returns ture if some of ele. give true for some funciton. else return false.


nums.some( (el) => {  // return true
    (el%2 == 0)
});



// reduce((accumulator, element)) -> reduces the array to a single value

let sum_of_nums = nums.reduce( (res, el) => (res+el) );  // ans 28

let maximum = nums.reduce( (max,el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(maximum);






