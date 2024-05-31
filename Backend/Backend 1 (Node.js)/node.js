// node.js -> JavaScript Runtime Environment
    // It is used for server side programming
    // It is not a language, library or framework


// Node REPL  
    // REPL -> Read , Evaluate, Print, Loop
 
// Node file run 
    // node filename.js

    let a = 5;

    for(let i = 1;i<=a ; i++){
        console.log(i);
    }

    console.log("bye");

    console.log(process.argv);

// Process 
    // process : This object provides information about, and control over, the current Node.js process.
        // process.cwd();   -> see the current working directory
        // process.version  -> see the node version
    // process.argv : returns an array containing the command-line arguments passed when the Node.js process was launched.
        let args = process.argv;

        for( let i =2;i<args.length ; i++){
            console.log("hello & welcome to", args[i]);
        }


// module.exports  -> a speacial object   -> using this keyword we can export some funciton,code or any object
        // requiring file
// require()  -> a build-in function to include external modules that exist in separate files

const math = require("./math");    // import the exported file modules using required keyword

console.log(math);
console.log(math.pi);
console.log(math.g);
console.log(math.mul(4,7));
console.log(math.sum(2,2));


        // requiring diractory

const fruits = require("./Fruits");
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[1].name);




// NPM -> Node Package Manager
    // npm is the standard package manager for Node.js
    // we can imagine npm as a library of packages
        // expressJs and reactJs are packages
    // npm is a command line tool


    // Installing packages
        // npm install <- package name ->
        // node_modules -> folder contains every installed dependency for your project
        // package-lock.json -> it records the exact version of every installed dependency, including its sub-dependencies and their versions
        // package.json -> file contains descriptive and functional metadata about a project, such as a name,version and dependencies

// figlet npm package

let figlet = require("figlet");

figlet("Hello Rifat", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// if we run npm install it install all the dependencies from package.json

// global install of npm
    // sudo chown -R $USER/usr/local/lib/node_modules   // for mac
    // npm install -g <- package name -> 
    // npm link < - package name ->

    

// require vs import
    // import {sum} from "./math.js"

    // we can't selectively load only the pieces we need with require but
    // with import, we can selectively load only the pieces we need, which can save memory.
    // Loading in synchronous for "require" but can be asynchronous for "import"

    // show how to import in imp.js file
    