// What is State?
// Stateful Protocol -> Stteful protocol require server to save the status and session information.
// ex - ftp
// Stateless Protocol -> Stateless protocol does not require the server to retain the server information or session information.
// ex - http

//  Express Sessions -> An attempt to make our session stateful.
// npm i express-session

const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require('express-session');

app.use(session({ secret: "mysupersecrets", resave: false, saveUninitialized: true }));

app.get("/test", (req, res) => {
    res.send("test successful");
});


// explore express sessions options
app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    
    res.send(`you sent a request ${req.session.count} times`);
});


// express session storing and using info

app.get("/register", (req, res)=> {
    let {name} = req.query;
    req.session.name = name;   // cerate a session variable
    console.log(req.session.name);
    // res.send(name);
    res.redirect("/hello");
});

app.get("/hello",(req, res)=> {
    res.send(`Hello, ${req.session.name}`);
});



app.listen(3000, () => {
    console.log("Server is listening to 3000");
});