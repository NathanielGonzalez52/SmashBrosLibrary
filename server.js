// const fs = require('browserify-fs');
const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
//
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});

// Catches website name to be moved
app.post("/add.html", function(req, res){
  res.sendFile(__dirname + "/add.html");
  var gamerTag = req.body.gamerTag;
  var fighter1 = req.body.mainOne;
  var fighter2 = req.body.mainTwo;
  var record = req.body.record;
  // console.log(gamerTag);
  // console.log(fighter1);
  // console.log(fighter2);
  // console.log(record);
});

app.post("/find.html", function(req, res){
  res.sendFile(__dirname + "/find.html");
});

app.post("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});

//may be moved

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
