const express = require("express");
const app = express();

const port = 8000;

app.listen(port, ()=> {
    console.log(`listening to port ${port}`);
});

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standerd GET response send. Welcome ${user}!`);
});






// Handling Post requests
    // set up POST request route to get some response
    // parse POST request data

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ei uporer 2 ta line er madhome amre express ke bujai amra ki data dichi karon express auto bujte pare na ki data deya hoy


app.post("/register", (req, res) => {
    console.log(req.body);
    let {user, password} = req.body;
    res.send(`standerd POST response send. Welcome ${user}`);
});