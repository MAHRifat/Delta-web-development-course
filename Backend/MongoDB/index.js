const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=> {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// schema  -> schema defines the shape of the documents within that collection.

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});


// Models -> Model in mongoose is a class with which we construct documents.

const User = mongoose.model("User", userSchema);   // model and collection name are usually same
const Employe = mongoose.model("Employe", userSchema);   // model and collection name are usually same

// insert 

// inserting one
const user1 = new User({name: "Adam",email: "adam@gmail.com",age: 34});
const user2 = new User({name: "Aam",email: "aam@gmail.com",age: 34});

// user1.save();         // -> to save in DB

// user2.save()
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });


// inserting multiple

// User.insertMany([
//     {name: "x",email: "x@gmal.com", age: 43},
//     {name: "rifat", email: "dfl@gmail.com", age: 23},
// ]).then((data)=> {
//     console.log(data);
// });

// Note: 
    // Mosgoose uses operation buffering

    // Mongoose lets you start using your models immediately, without
    // waiting for mongoose to establish a connection to MongoDB


// Find
    // model.find()  -> returns a query object (thennable)
    // Mongoose queries are not promises. But they have a .then()

    User.find().then((data)=> {
        console.log(data);
    });

    // User.find({age: {$gte: 25}}).then((data)=> {
    //     console.log(data);
    // });


    // model.findOne()  -> returns a single result

    // User.findOne({age: {$gt: 30}}).then((data) => {
    //     console.log(data);
    // })
    // .catch((err)=> {
    //     console.log(err);
    // });


    // model.findById()  -> commonly used

    // User.findById('667905f9d840e27489234e8c')
    // .then((res)=> {
    //     console.log(res);
    // })



// Update

    // model.updateOne( <filter> , <update> )

    // User.updateOne({name: 'x'}, {age: 33})
    // .then((res)=> {
    //     console.log(res);
    // });

    // model.updateMany(<filter> , <update> )
    
    // User.updateMany({age: {$gt: 30}}, {age: 23})
    // .then((res)=> {
    //     console.log(res);
    // });

    
    // model.findOneAndUpdate()  -> to show which data was updated we use this method

    User.findOneAndUpdate({name: 'x'}, {age: 45}, {new: true})   // use new: true for show the updated data in console
    .then((res)=> {
        console.log(res);
    });


// Delete
    // model.deleteOne()  -> returns count

    // User.deleteOne({name: 'x'}).then((res)=> {
    //     console.log(res);
    // });


    // model.deleteMany()   -> returns count

    User.deleteMany({age: {$gt: 20}}).then((res)=>{
        console.log(res);
    });

    // model.findByIdAndDelete()   
    // model.findOneAndDelete()   -> to show which one is deleted


// Schema Validations -> Basically, Rules for schema

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    }
});


// schema validations with update
    // validations rules are work in inserting data 
    // validations not work when updating a data
    
