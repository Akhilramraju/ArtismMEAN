
/*
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

// user schema

const UserSchema = mongoose.Schema({
description: {
    type: String
},
type: {
    type: String,
    required: true
},
noOfPosts:{
    type:Number,
    required:true
}
});

const Art = module.exports = mongoose.model("Art",UserSchema);

module.exports.getArtsById = function(id,callback){
 //   User.findById(id,callback);
     
}

module.exports.getUserByUsername = function(username,callback){
    const query = {username: username}
    User.findOne(query,callback);
}

module.exports.getArtsByUsername = function(newUser,callback){

    console.log("add users in model");

    bcrypt.genSalt(10,(err,salt) => {
      
        bcrypt.hash(newUser.password, salt, (err,hash) => {
           
            if(err) {   throw err;}
            else{
                console.log("here 123");
            newUser.password = hash;
            newUser.save(callback);
        }
        });
    });
return;


}
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {

        if(err) throw err;
        callback(null, isMatch);
    });
}
*/