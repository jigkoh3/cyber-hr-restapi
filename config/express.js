var express = require("express");
var bodyParser = require('body-parser')
module.exports = function(){
	var app = express();

	//middle ware
	app.use(bodyParser.json());

	require("../app/routes/index.route")(app);

	
	
	return app;
}