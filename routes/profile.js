/*
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const User = require("../models/user");
const { secret } = require("../config/database");

//Register router

router.post("/newArt",(req,res) =>{
    let newArt = new Art({
        description: req.body.description,
        artType: req.body.art
    });
 console.log("art",newArt.art);
    User.addUser(newUser, (err,user) => {
        console.log("user added");
        if(err){

            res.json({success:false,msg:"Failed to register user"});
        }
        else{
            res.json({success:true,msg:"User registered"});
        }
    });

});


//Ayuthenticate
router.post("/authenticate", (req,res, next) =>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,(err,user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: "User not found"});
        }
        User.comparePassword(password,user.password, (err, isMatch) => {
            if(err) throw err;
    
            if(isMatch){
                
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 // 1 week 
                });
                console.log("here token :",token);
                res.json({
                    success: true,
                    token: "JWT "+token,
                    user: {
                        id: user._id,
                        name: user.username,
                        username: user.username,
                        email: user.email            
                    }
                  
                });
                console.log("returned");
            } else {
                return res.json({success: false, msg:"Wrong password"});
            }
        });
    });

});

//Profile
router.get("/profile", passport.authenticate("jwt",{session:false}), (req,res, next) =>{
    console.log(" returning profile ");
    res.json({user: req.user});

});




module.exports = router;
*/