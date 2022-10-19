// const fs = require('browserify-fs');
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
// const request = require("request");
//
const app = express();
var library = [];
// var popup = require("popups");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});

// Catches website name to be moved
app.post("/add.html", function(req, res) {
  res.sendFile(__dirname + "/add.html");
  var gamerTag = req.body.gamerTag;
  var player1 = req.body.mainOne;
  var player2 = req.body.mainTwo;
  var record = req.body.record;
});

app.post("/find.html", function(req, res) {
  res.sendFile(__dirname + "/find.html");
  var gamerTag = req.body.gamerTag;
  // popup.alert({
  //   content: "Just testing"
  // });
  // console.log(gamerTag);

  fs.readFile('SmashBrosLibrary.txt','utf-8', (err, data) => {
    if (err) {
      console.log("ERROR");
    }
    console.log(JSON.parse(data)[0]);
    for (var i=0; i < JSON.parse(data).length; i++) {
      console.log(gamerTag);
      console.log(JSON.parse(data)[0].gamer_tag);
      if (gamerTag === JSON.parse(data)[i].gamer_tag) {
        console.log("Yes, it exists!");
      }
    // console.log(JSON.parse(data)[0]);
}
  })
});

app.post("/success.html", function(req,res) {
  res.sendFile(__dirname + "/success.html");
  console.log("hello");
  var gamerTag = req.body.gamerTag;
  var player1 = req.body.mainOne;
  var player2 = req.body.mainTwo;
  var record = req.body.record;
  var data =
  {
    gamer_tag: gamerTag,
    fighters: {
      player_one: player1,
      player_two: player2
    }
  }

  library.push(data);

  var jsonData = JSON.stringify(library);
  //
  fs.writeFile("SmashBrosLibrary.txt", jsonData, (err) => {
    if (err) {
    	console.log(err);
    }
    })
  })

app.post("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});



//may be moved

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
