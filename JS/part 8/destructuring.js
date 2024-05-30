// destructuring -> storing values of array into multiple variables

let names = ["rifat","rahul","rakib","shobuj"];
let [winner, runnerup] = names;

console.log(winner, runnerup);

// desturcturing for objects

const student = {
    name: "rifat",
    age: 34
};

let {name: s_name, age: s_age} = student;