// var express = require("express");

// var app = express();

// var helloAPI = function(req,res,next){
// 	res.send("helloAPI");
// }

// var helloAPIpost = function(req,res,next){
// 	res.send("helloAPI POST");
// }

// app.get("/",helloAPI)
// app.post("/",helloAPIpost)

var mongoose = require("./config/mongoose");
var express = require("./config/express");   

var db = mongoose();
var app = express();

app.listen(8080);
console.log("Server is running http://localhost:3100");