// const fs = require('browserify-fs');
const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
//
const app = express();
//

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});


//may be moved
app.post("/", function(req, res) {
  var gamerTag = req.body.gamerTag;
  var fighter1 = req.body.fighter1;
  var fighter2 = req.body.fighter2;
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})


// const data = {
//   fighter: [
//     {
//       gamerTag: username,
//       fighterOne: fighter1,
//       fighterTwo: fighter2
//   }
// ]
// };

// Barebones express server
// const express = require("express");
// const request = require("request");

// const app = express();
// What happens at home route


//
// app.listen(3000, function() {
//   console.log("Server started on port 3000...");
// });
