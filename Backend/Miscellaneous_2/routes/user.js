const express = require("express");
const router = express.Router();



// index users
router.get("/", (req,res)=> {
    res.send("GET for users");
});


// Show users

router.get("/:id",(req, res)=> {
    res.send("show users");
});

module.exports = router;