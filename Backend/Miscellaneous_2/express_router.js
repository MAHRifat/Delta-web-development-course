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

app.get("/", (req, res)=> {
    res.send("Hi, I am root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, ()=>{
    console.log("Server is listening to 3000");
});