const express = require("express");
const app = express();
// middleware

// app.use((req, res)=> {
//     // let {query} = req.query;   // to access the query search
//     console.log("I am middleware");
//     res.send("middleware finished");
// });

// using next in middleware
    // The next middleware function is commonly denoted by a variable named next.
    // if the current middleware funcction does not end the request-response cycle, it must call next()
    // to pass control to the new middleware function.
app.use((req, res, next)=> {
    console.log("I am middleware with next");
    next();
});

// creating Utility Middleware  -> act as logger which help us to print useful info into terminal
    // morgan is a logger npm package
app.use((req, res, next) => {
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    next();
});


// app.use exploring

app.use("/random", (req, res, next)=> {
    console.log("I am only for random page");
    next();
});

// app.use((req, res)=> {                            // use for show error
//     res.status(404).send("page not found");
// });


// API token as Query String
    // Let's create a middle-ware for an api that checks 
    // if the access token was passed in the query string or not.
    // app.use("/api", (req, res, next)=> {
    //     let {token} = req.query;
    //     if(token === "giveaccess"){
    //         next();
    //     }
    //     res.send("access denied");
    // });

    // app.get("/api", (req, res)=> {
    //     res.send("data");
    // });

    // also do this like below:
    const checkToken = (req, res, next)=> {
        let {token} = req.query;
        if(token === "giveaccess"){
            next();
        }
        // res.send("access denied");
        throw new Error("ACCESS DENIED!");   // send error
    };

    app.get("/api",checkToken, (req, res)=> {
        res.send("data");
    });

// Handling Errors
    // Express default error handler




app.get("/", (req, res)=> {
    res.send("HI I am root.");
});

app.get("/random", (req, res)=> {
    res.send("This is a random page");
});




app.listen(8000, ()=> {
    console.log("Server listenting to port 8000");
});


