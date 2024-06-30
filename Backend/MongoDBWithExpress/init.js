// intialized Database

const mongoose = require('mongoose');

main()
.then(()=> {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

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

let allChats = [
    {
        from: "Rakib",
        to: "Rokib",
        msg: "Hello",
        created_at: new Date(),
    },
    {
        from: "sakib",
        to: "sokib",
        msg: "ello",
        created_at: new Date(),
    },
    {
        from: "takib",
        to: "tokib",
        msg: "llo",
        created_at: new Date(),
    },
    {
        from: "makib",
        to: "mokib",
        msg: "Hlo",
        created_at: new Date(),
    },
    {
        from: "aakib",
        to: "aokib",
        msg: "Helo",
        created_at: new Date(),
    },
    {
        from: "bakib",
        to: "bokib",
        msg: "Hello",
        created_at: new Date(),
    },
    {
        from: "fakib",
        to: "fokib",
        msg: "Hello",
        created_at: new Date(),
    },
    {
        from: "cakib",
        to: "cokib",
        msg: "Hello",
        created_at: new Date(),
    },
    {
        from: "nakib",
        to: "nokib",
        msg: "Hello",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);