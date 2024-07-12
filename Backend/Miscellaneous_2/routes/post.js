const express = require("express");
const router = express.Router();



// index users
router.get("/", (req,res)=> {
    res.send("GET for posts");
});


// Show users

router.get("/:id",(req, res)=> {
    res.send("show posts");
});

module.exports = router;