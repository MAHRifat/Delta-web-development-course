// have to install ejs,express,path and npm init 
// const exp = require("constants");
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const app = express();
app.use(methodOverride('_method'));

const port = 8000;

app.listen(port, ()=> {
    console.log(`Listeing to port ${port}`);
});

const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("server working well!");
});


// implement GET -> /posts  

let posts = [
    {
        id: uuidv4(),
        username: "rifat",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "rifata",
        content: "I love fighting"
    },
    {
        id: uuidv4(),
        username: "rahul",
        content: "I love dancing"
    },
];

app.get("/posts", (req, res)=> {
    res.render("index", {posts});
});


// implement: POST /posts
    // POST /posts  -> to add a new post
        
        // serve the form
        
        app.get("/posts/new", (req, res)=> {
            res.render("form.ejs");
        });  

        // add the new post

        app.post("/posts", (req, res)=> {
            console.log(req.body);
            let {username, content} = req.body;
            id = uuidv4();
            posts.push({id,username, content});
            // res.send("post request working");
            res.redirect("/posts");  // by default get req e pathabe /posts e 
        });

        


// redirect -> we use redirect to connect different pages





// Implement: GET  /posts/:id    -> show route
        // GET /posts/:id    -> to get one post (using id)

        app.get("/posts/:id", (req, res)=> {
            let {id} = req.params;
            let post = posts.find((p) => id ===p.id);
            res.render("show.ejs",{post});
        });

        // we can create id automaticly using
            // UUID package -> universally unique identifier 
                // npm install uuid
                
                

          
// implement: PATCH  /posts/:id  -> update route
        // PATCH /posts/:id  -> to update specific post

app.patch("/posts/:id", (req, res)=> {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id ===p.id);
    post.content = newContent;
    // res.send(newContent);
    res.redirect("/posts");
});


// Create form for update   -> edit route
    // serve the edit form  GET  /posts/:id/edit

    app.get("/posts/:id/edit", (req, res)=> {
        let {id} = req.params;
        let post = posts.find((p) => id ===p.id);
        res.render("edit.ejs", {post});
    });


    // we can use method -override package to change the post and get request form the html method 
        // npm install method-override



// implement:   // posts/:id  -> destroy route
    // DELETE  /posts/:id  -> to delete specific post

    app.delete("/posts/:id", (req, res)=>{
        let {id} = req.params;
        posts = posts.filter((p)=> id !== p.id);
        // res.send("delete success");
        res.redirect("/posts");
    });