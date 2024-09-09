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
const flash = require('connect-flash');    
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "mysupersecrets", resave: false, saveUninitialized: true }));
app.use(flash());    // to use flash it is compolsary to use session

app.get("/test", (req, res) => {
    res.send("test successful");
});

// middleware for flash

app.use((req, res, next)=> {
    res.locals.success = req.flash("success");   // it was save the messages variable to the res.locals
    res.locals.error = req.flash("error");
    next();
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
    let {name = "anonymous"} = req.query;          // /register?name=rifat
    req.session.name = name;   // cerate a session variable
    console.log(req.session.name);
    if(name === "anonymous"){
        req.flash("error", "User name must be defined");
    }else{
        req.flash("success", "User registered successfully");    // show a pop up message before redirect to /hello   
    }
    // res.send(name);
    res.redirect("/hello");
});

app.get("/hello",(req, res)=> {
    // res.send(`Hello, ${req.session.name}`);
    res.render("page.ejs", {name: req.session.name});
});


// connect-flash -> npm i connect-flash
    // The flash is a special areea of the sessions used for storing messages. Messages are written to the
    // the flash and cleared after being displayed to the user.


// res.local

app.listen(3000, () => {
    console.log("Server is listening to 3000");
});