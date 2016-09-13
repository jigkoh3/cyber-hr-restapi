var mongoose = require("mongoose");
var uri = "mongodb://localhost/hr";


module.exports = function(){
	mongoose.set('debug',true);
	var db = mongoose.connect(uri,function(err){
		console.log();
	});

    require('../app/models/employee.model');
    require('../app/models/benefitsMaster.model');

	return db;
}