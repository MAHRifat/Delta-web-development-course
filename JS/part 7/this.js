// this -> keyword refers to an object that is executing the current
//          current piece of code.

const student = {
    name: "Rifat",
    age: 23,
    getAge(){
        console.log(this.age);
    }
};


function getWindow(){
    console.log(this);   // this refer the window object
}