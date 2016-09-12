var mongoose = require("mongoose");
var uri = "mongodb://heroku_bxndgfqt:heroku_bxndgfqt@ds029426.mlab.com:29426/heroku_bxndgfqt";


module.exports = function(){
	mongoose.set('debug',true);
	var db = mongoose.connect(uri,function(err){
		console.log();
	});

    require('../app/models/index.model');

	return db;
}