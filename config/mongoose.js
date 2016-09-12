var mongoose = require("mongoose");
var uri = "";


module.exports = function(){
	mongoose.set('debug',true);
	var db = mongoose.connect(uri,function(err){
		console.log(err);
	});

    require('../app/models/index.model');

	return db;
}