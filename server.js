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
});

app.post("/success.html", function(req,res) {
  res.sendFile(__dirname + "/success.html");
  // console.log("hello");
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
    },
    record: record

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

app.post("/find.html", function(req, res) {
  res.sendFile(__dirname + "/find.html");
//   var gamerTag = req.body.gamerTag;
//
//   fs.readFile('SmashBrosLibrary.txt','utf-8', (err, data) => {
//     if (err) {
//       console.log("ERROR");
//     }
//     // console.log(JSON.parse(data)[0]);
//     for (var i=0; i < JSON.parse(data).length; i++) {
//       if (gamerTag === JSON.parse(data)[i].gamer_tag) {
//         console.log("Got 'em");
//       }
// }
//   })
});

app.post("/reveal.html", function(req, res) {
  var gamerTag = req.body.gamerTag;
  var found="false";

  fs.readFile('SmashBrosLibrary.txt','utf-8', (err, data) => {
    if (err) {
      console.log("ERROR");
    }
    // console.log(JSON.parse(data)[0]);
    for (var i=0; i < JSON.parse(data).length; i++) {
      if (gamerTag === JSON.parse(data)[i].gamer_tag) {
        found="true";
        var message = "We have fought them before. They played as " + JSON.parse(data)[i].fighters.player_one + " and " + JSON.parse(data)[i].fighters.player_two + ". We got a " + JSON.parse(data)[i].record + " against them."
        // console.log(message);
        res.render('index.pug', { message: message});
      }
      else {
        res.write("<h1>Doesn't look like we've fought these guys before.</h1>");
        res.send();
      }
}
  })
  // res.sendFile(__dirname + "/reveal.html");
})

// app.post("/", function(req, res){
//   res.sendFile(__dirname + "/welcome.html");
// });

app.post("/welcome.html", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});
//Dynamic port that heroku gets to choose

// || allows hosting on 3000 concurrently
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
