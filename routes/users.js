const express = require("express");
const router = express.Router();

//Register router

router.get("/register",(req,res) =>{
    res.send("Registration")
});

//Ayuthenticate
router.post("/authenticate", (req,res, next) =>{
    res.send("Authemticate");

});

//Profile
router.get("/profile", (req,res, next) =>{
    res.send("Profile");

});

//Validate
router.get("/validate", (req,res, next) =>{
    res.send("validate");

});


module.exports = router;