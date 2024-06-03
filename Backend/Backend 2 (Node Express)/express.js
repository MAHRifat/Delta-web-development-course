// Library vs Framework
    // library -> A library is a collection of pre-written code that can be used to perform specific tasks.
        // ex -> axios
    // framework -> A framework is a set of pre-written code that provides a structure for developing software applications.
        // ex -> express

    
// Express
    // a node.js web application framework that helps us to make web applications
    // it is used for server side programming

// used of express
    // 1. listen for incomming request
    // 2. passes the request
    // 3. match responces with routes
    // 4. responce


const express = require("express");
const app = express();

let port = 8000;
// ports are the logical endpoints of a network connection 
// that is used to exchange information between a web server 
// and a web client;


app.listen(port, ()=> {           // use for listen
    console.log(`app listening on port ${port}`);
});

// app.use((req, res) => {         // use for send responces
//     // console.log(req); 
//     console.log("new incoming request");
//     // res.send("This is a basic respondec");
//     // res.send({
//     //     name: "Apple",
//     //     color: "red"
//     // });

//     let code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Mango</li></ul>"
//     res.send(code);

//     // use res.send for send responce from our server
// });



// Routing
    // it is process of selecting a path for traffic in a network or between or across multiple networks.
   
    app.get("/apple", (req,res)=> {
        res.send({
            name: "Apple",
            color: "red"
        });
    });

    app.get("/", (req, res)=> {
        res.send("root path for get request");
    });

    // app.get("*", (req,res)=>{          // use this for all path 
    //     res.send("invalid path");
    // });


    app.post("/", (req, res)=> {
        res.send("you send a post request");
    });


// Nodemon -> To automatically restart server with code changes -> it is npm package




// path parameters   -> req.params

app.get("/:username/:id", (req, res)=> {
    console.log(req.params);
    let {username,id} = req.params;
    res.send(`This account belongs to @${username} and id ${id}`);
});


// query strings -> req.query

app.get("/search", (req, res)=> {
    let {q} = req.query;
    if(!q){
        res.send("No Search Query");
    }
    res.send(`These are the results for: ${q}`);
});