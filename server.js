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

const app = express();
//What happens at home route
app.get("/", function(request, response){
  console.log(request);
});

app.listen(3000, function() {
  console.log("Server started on port 3000...");
});
