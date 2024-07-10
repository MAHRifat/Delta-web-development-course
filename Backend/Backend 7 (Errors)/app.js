const express = require("express");
const app = express();
const expressError = require("./expressError");
// middleware





app.get("/", (req, res)=> {
    res.send("HI I am root.");
});

app.get("/random", (req, res)=> {
    res.send("This is a random page");
});

// custom error handlers
const checkToken = (req, res, next)=> {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    // res.send("access denied");
    throw new expressError(401, "ACCESS DENIED!");   // send error
};

app.get("/api",checkToken, (req, res)=> {
    res.send("data");
});

app.get("/err", (req, res)=> {
    abcd = abcd
});



// custom error class -> better then custom error handlers

// Error Class -> Create an admin route & send an error with a 403 status code
app.get("/admin", (req, res)=> {
    throw new expressError(403, "Access to admin is forbidden");
});

app.use((err, req, res, next)=> {
    console.log("------Error------");
    let {status = 500, message = "some error happend"} = err; // default status was 500
    // next();
    // next(err);    // we use next(err) to show error on the page
    res.status(status).send(message);   

});


// Handling Async Errors -> show in the image

// using wrapAsync -> which is better then try and catch async errors handler


// Mongoose errors




app.listen(8000, ()=> {
    console.log("Server listenting to port 8000");
});


