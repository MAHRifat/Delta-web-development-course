// Templateing
    // EJS -> Embedded JavaScript Teplates
    // EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

const express = require("express");
const app = express();


const port = 8000;



app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});

// using EJS 

const path = require("path");
app.set("views", path.join(__dirname, "/views"));  // use this code for show that our views folder is in the backend 3 folder

app.set("view engine", "ejs");      // jokhon e amra viwe dekhbo oitai template 

app.get("/", (req, res)=>{
    // res.send("This is root");
    res.render("home.ejs");  // ejs er madhome amra render kori kono file -> auto  views folder e file khuje
});


// Interpolation syntax
    // Interpolation refers to embedding expressions into marked up text


// Passing data to EJS

app.get("/random",(req, res)=> {
    let num = Math.floor(Math.random() * 10) +1;
    res.render("random.ejs", {num});
});






// conditional statements and loops in ejs
    // show this in random.ejs

// instagram ejs -> create a basic template for instagram page based on following route: /ig/:username

app.get("/ig/:username", (req,res)=> {
    const followers = ["rifat","naim","sohag","raihan"];
    let {username} = req.params;
    res.render("instragram.ejs", {username, followers});
});

// instragram page using ejs with data.json

app.get("/ins/:username", (req,res)=> {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("ins_page.ejs", {data});
    }else{
        res.render("error.ejs");
    }
});



// serving static files -> app.use( express.static( folder_name))

app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));


// includes  -> <%- include("includes/head.ejs") %>

