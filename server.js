// const fs = require('browserify-fs');
// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
//
// const app = express();
//
// app.listen(3000, function() {
//   console.log("Server is running on ")
// })


// Barebones express server
const express = require("express");
// const request = require("request");

const app = express();
// What happens at home route

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/welcome.html");
});
//
app.listen(3000, function() {
  console.log("Server started on port 3000...");
});
