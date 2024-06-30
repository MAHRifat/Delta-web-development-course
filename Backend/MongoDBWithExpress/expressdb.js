const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");     

const methodOverride = require('method-override');   // use for put req
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));     // use when we want the access of post req data

app.listen(8000, ()=> {
    console.log("server is listening on port 8000");
});

app.get("/", (req, res)=> {
    res.send("server is working");
});


// set mongoose
const mongoose = require('mongoose');

main()
.then(()=> {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// creating the Model

// require form models/chats.js
const Chat = require("./models/chats.js");

// let chat1 = new Chat({
//     from: "Rifat",
//     to: "world",
//     msg: "Allah will save palistine",
//     created_at: new Date(),
// });

// chat1.save().then((res)=> {
//     console.log(res);
// });



// index route

app.get("/chats",async (req, res)=> {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

// new and create route

app.get("/chats/new", (req, res)=> {
    res.render("form.ejs");
});


app.post("/chats", (req, res)=> {
    let {from, to, msg} = req.body;
    console.log(from,to,msg);
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save();
     res.redirect("/chats");
});


// edit and update route

// npm i method-override 

app.get("/chats/:id/edit",async (req, res)=> {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    // console.log("he",chat);
    res.render("edit.ejs", {chat});
});

app.put("/chats/:id",async (req, res)=>{
    let {id}= req.params;
    let {msg} = req.body;
    let updatechat = await Chat.findByIdAndUpdate(
        id, 
        {msg: msg, created_at: new Date()}, 
        {runValidators: true, new: true}
    );
    console.log(updatechat);
    res.redirect("/chats");
});




// Destroy Route

app.delete("/chats/:id",async (req, res)=> {
    let {id} = req.params;
    let deletechat =await Chat.findByIdAndDelete(id);
    console.log(deletechat);
    res.redirect("/chats");
});