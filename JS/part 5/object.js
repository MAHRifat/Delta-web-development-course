const post = {
    usermane: "rifat",
    content: "This is my objects",
    likes: 150,
    repost: ["@apnacollege","@delta"]
};

// console.log(post); 

const student = {
    name : "Rifat",
    age: 22,
    city: "Cumilla"
};


console.log(student);

student.city = "savar";

console.log(student);

student.gender = "Male";

console.log(student);

delete student.gender;

console.log(student);
