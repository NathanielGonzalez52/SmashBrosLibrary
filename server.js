// const fs = require('browserify-fs');
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

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
  var player1 = req.body.mainOne;
  var player2 = req.body.mainTwo;
  var record = req.body.record;
  // console.log(gamerTag);
  // console.log(fighter1);
  // console.log(fighter2);
  // console.log(record);
});

app.post("/find.html", function(req, res){
  res.sendFile(__dirname + "/find.html");
});

app.post("/success.html", function(req,res) {
  res.sendFile(__dirname + "/success.html");
  console.log("hello");
  var gamerTag = req.body.gamerTag;
  var player1 = req.body.mainOne;
  var player2 = req.body.mainTwo;
  var record = req.body.record;
  data: [
  {
    gamer_tag: gamerTag,
    fighers: {
      player_one: player1 ,
      player_two: player2
    }
  }
]
const jsonData = JSON.stringify(data);
//
fs.appendFile("SmashBrosLibrary.txt", jsonData, (err) => {
  if (err) {
  	console.log(err);
  }
  })
}
  // Node.js program to demonstrate the
// fs.appendFile() method

// Import the filesystem module
// const fs = require('fs');
//
// // Get the file contents before the append operation
// console.log("\nFile Contents of file before append:",

// else {
// 	// Get the file contents after the append operation
// 	console.log("\nFile Contents of file after append:",
// 	fs.readFileSync("example_file.txt", "utf8"));
// }
// });
//
app.post("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});



//may be moved

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
