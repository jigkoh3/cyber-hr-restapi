var mongoose = require("mongoose");
var uri = "mongodb://localhost/hr";


module.exports = function(){
	mongoose.set('debug',true);
	var db = mongoose.connect(uri);

    require('../app/models/index.model');

	return db;
}