var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataSchema = new Schema({
	NameBN: String,
    DetailBN: String
});

mongoose.model('BenefitsMasterData', DataSchema);
