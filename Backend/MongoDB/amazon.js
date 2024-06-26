const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=> {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


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
        min: [1, "please enter a valid price"]
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"],
    }
});


const User = mongoose.model("User", bookSchema); 


// const book1 = new User({
//     title: "sxyz",
//     author: "alobaba",
//     price: 34,
//     discount: 4
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });


// schema validations with update
    // validations rules are work in inserting data 
    // validations not work when updating a data

    User.findByIdAndUpdate('667c648e3afbbcc207af56fc', {price: -8}, {runValidators: true})
    .then((res)=> {
        console.log(res);
    }).catch((err)=>{
        console.log(err.errors.price.properties.message);
    });
        // we use runValidators to true for validate when updateing some data

        // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()


