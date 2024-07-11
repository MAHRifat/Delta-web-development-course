const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=> console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// one to many
    // one to few

    // const userSchema = new Schema({
    //     username: String,
    //     address: [
    //         {
    //             _id: false,         // use for don't want any id for the addresses
    //             location: String,
    //             city: String,
    //         },
    //     ]
    // });


    // const User = mongoose.model("User", userSchema);

    // const addUsers = async()=> {
    //     let user1 = new User({
    //         username: "Tomal",
    //         address: [{
    //             location: "Savar",
    //             city: "Savar"
    //         }]
    //     });

    //     user1.address.push({location: "Niribili", city: "Savar"});
    //     let result = await user1.save();
    //     console.log(result);
    // }


    // addUsers();



    // one to many / Approach 2 
        // -> store a reference to the child document indide parent

    const orderSchema = new Schema({
        item: String,
        price: Number,
    });
    
    // const addOrder = async()=> {
        //    let res = await Order.insertMany([ 
            //         {item: "Somasa", price: 10},
            //         {item: "Singara", price: 10},
            //         {item: "Vegi-Role", price: 20},
            //         {item: "Chicken_Role", price:30}
            //     ]);
            //     console.log(res);
            // }
            
            // addOrder();
            
            const customerSchema = new Schema({
                name: String,
                orders: [
                    {
                        type: Schema.Types.ObjectId,
                        ref: "Order"
                    }
                ]
            });

    // Delete handleing middleware
        // pre  -> run before delete

            // customerSchema.pre("findOneAndDelete", async()=>{
            //     console.log("per middleware");
            // });


        // post -> run after delete 
            // we use post middleware for delete orders after delete the customer

            customerSchema.post("findOneAndDelete", async(customer)=> {
                if(customer.orders.length){
                    let res = await Order.deleteMany({_id: { $in: customer.orders}});
                    console.log(res);
                }
            });
        
            
            
            const Order = mongoose.model("Order", orderSchema);
            const Customer = mongoose.model("Customer", customerSchema);

    // const addCustomer = async()=>{
        // let cust1 = new Customer({
        //     name: "Rifat",
        // });

        // let order1 = await Order.findOne({item: "Somasa"});
        // let order2 = await Order.findOne({item: "Singara"});

        // cust1.orders.push(order1);
        // cust1.orders.push(order2);

        // let res = await cust1.save();
        // console.log(res);

        // let result = await Customer.find({});    // by default only id will store in the mongoose although we push the hole information
        // console.log(result);
        // let resPopulate = await Customer.find({}).populate("orders");
        // console.log(resPopulate[0]);  // it will show the hole detailes of order info
    // }

    // addCustomer();



    // One to many / Approach 3 (one to squilliones)  
        // -> Store a reference to the parent document inside child

    // const UserSchema = new Schema({
    //     username: String,
    //     email: String,
    // });

    // const InstUser = mongoose.model("InstUser", UserSchema);

    // const PostSchema = new Schema({
    //     content: String,
    //     likes: Number,
    //     user: {
    //         type: Schema.Types.ObjectId, ref: "InstUser"
    //     },
    // });

    // const Post = mongoose.model("Post", PostSchema);

    // const addData = async()=>{
        // let user1 = new InstUser({     // insert user1 to mongoosh
        //     username: "Rifat",
        //     email: "abcd@gmail.com"
        // });

        // let user1 = await InstUser.findOne({username: "Rifat"});    // find the user1 from mongoosh

        // let post3 = new Post({
        //     content: "Welcome Home!",
        //     likes: 38,
        // });

        // post3.user = user1;


        // await user1.save();     
        // await post3.save();
    // }


    // addData();

    // const getData = async()=>{
    //     let res = await Post.find({}).populate("user");
    //     console.log(res);
    // }

    // getData();





// Must read
    
    // https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design




// Handling Deletin -> using Mongoose Middleware
    // we can use 2 middleware
        // a. pre -> run before the query in executed
        // b. post -> run after the query is executed

    // the per and post middleware must be declare before the model

    // we use 2 approch for handling deleting

    const addCust = async ()=> {
        let newCust = new Customer({
            name: "Karan Arjun"
        });

        let newOrder = new Order({
            item: "Teheri",
            price: 180
        });

        newCust.orders.push(newOrder);

        await newOrder.save();
        await newCust.save();
    }

    // addCust();


    // use for when we want to delete the customer not the order details

    const deleteCust = async()=> {
        let data = await Customer.findOneAndDelete({_id: '668fa40768227cf0c00346c7'});
        console.log(data);
    }

    deleteCust();


   