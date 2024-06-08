// object Prototypes
    // Prototypes are the mechanism by which JavaScript objects inherit features from one another.
    // It is like a single template object that all objects inherit methods and properties from 
        // without having their own copy.

let arr = [1,2,3];

// arr.__proto__.push = (n)=>{       // if we want to chngne any buildin prototype we use this code
//     console.log("pushing number : ", n);
// }

// arr.push(4);


// factory funcitons
    // a Function that creates objects

function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        }
    };
    return person;
}

let p1 = PersonMaker("rift", 23);
console.log(p1);


// New operator
    // better then factory function
    // The new operator lets developers create an instance of a user-defined object type or of one of the build-in object types that has a constructor funciton.
   
    // constructors -> doesn't return anythings & start with capital letter
    function Person(name, age){
        this.name = name;
        this.age = age;
    }

    Person.prototype.talk =()=> {
        console.log(`Hi, My name is ${this.name}`);
    };

    let p2 = new Person("adam",25);
    let p3 = new Person("evel", 43);


// class -> better then new operator
    // classes are a template for creating objects
    // the constructor method is a special method of a classs for creatign and initializing an object instance of that class.

    class People{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        talk(){
            console.log(`Hi, My name is ${this.name}`);
        }
    }


    let pe1 = new People("rifat",23);
    let pe2 = new People("Niloy", 22);


// inheritance
    // inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

class Student extends People{
    constructor(name, age, marks){
        super(name,age);  // parent class constractor is being called
        this.marks = marks;
    }

    greet(){
        return "hello!";
    }
}

let s1 = new Student("Rifat",22, 93);

s1.greet();

