// Express Router
    /*
        Express Routers are a way to organize your Express application such that
        our primary app.js file does not become bloated

        const router = express.Router()         // creates new router object

    */


const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/", (req, res)=> {
    res.send("Hi, I am root");
});

app.use("/users", users);
app.use("/posts", posts);

// Web Cookies
    // HTTp cookies are small blocks of data created by a web server while a user is browsing a website and placed on the 
    // user's computer or other device by the user's web browser.

// create cookies
app.get("/getcookies",(req, res)=>{
    res.cookie("greet", "Hello");
    res.cookie("greet", "Assalamuyalaikum assanlam");
    res.send("you send some cookies");
});

// read cookies  -> we use cookie-parser package ( npm i cookie-parser)

app.get("/greet", (req, res)=> {
    let {greet = "Good"} = req.cookies;
    res.send(`Hi! ${greet}`);
});


// Signed cookies
    // send signed cookies

    app.get("/getsignedcookie", (req, res)=>{
        res.cookie("color", "red", {signed: true});
        res.cookie("Made_in","Bangladesh", {signed: true});
        res.send("done!");
    });

    // verify signed cookies

    app.get("/verify", (req, res)=>{
        let {Made_in} = req.signedCookies;    // if it show the result than cookies dosen't change by anyone
        res.send(Made_in);
    });



app.listen(3000, ()=>{
    console.log("Server is listening to 3000");
});