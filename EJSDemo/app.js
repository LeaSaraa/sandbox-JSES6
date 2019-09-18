var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.sender("home.ejs");
});

app.get("/randomexample/:thing". function(req, res){
  var thing = req.params.thing;
  res.send("Random example " + thing);
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Are you listening?");
});

