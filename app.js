const express = require("express");
const path = require("path");
const bodyParser = require ("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//connction to mongo in config file
mongoose.connect(config.database);

// when connected to mongo, log
mongoose.connection.on("connected", () => {
    console.log("Connected to Mongo");
});


// when not connected to mongo, log
mongoose.connection.on("error", (err) => {
    console.log("Not connected to Mongo"+err);
});

const app = express();

const users = require("./routes/users");
//for back end using port 

const port = 3000;

// using cors to publish the node to any domain
app.use(cors());


//set static folder 
app.use(express.static(path.join(__dirname,"public")));

//Body parser Middlware with take the request forms

app.use(bodyParser.json());

// passpoer Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users",users);

//initializing route with /
app.get("/", (req,res) => {
    res.send("Invalid Endpoint");

})

// start server
app.listen(port, ()=> {
    console.log("server started on port"+port);
});
