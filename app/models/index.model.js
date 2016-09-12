var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var employeeDataSchema = new Schema({
    PersonalInfo: {
        FirstNameTH: String,
        LastNameTH: String,
        FirstNameEN: String,
        LastNameEN: String,
        Position: String,
        Salary: Number,
        PresentAddress: String,
        Moo: Number,
        District: String,
        Amphur: String,
        Province: String,
        Postcode: String,
        Tel: String,
        Moblie: String,
        Email: String,
        Living: String,
        Birthdate: Date,
        Age: Number,
        Race: String,
        Nationality: String,
        Religion: String,
        IDCard: String,
        IDCardExp: Date,
        Height: Number,
        Weight: Number,
        Military: String,
        Marital: String,
        Sex: String,
        Img: String,
        UnderlyingDisease: String,
        Account: String,
        WorkPlaceFI: String
    },
    FamilyInfo: [{
        FirstNameFI: String,
        LastnameFI: String,
        AgeFI: Number,
        SexFI: String,
        OccupationFI: String,
        WorkPlaceFI: String,
        RelatedFI: String,
        TelFI: String
    }],
    Created: {
        type: Date,
        default: Date.now
    },
    CreatedBy: String,
    Updated: Date,
    UpdatedBy: String,
});
mongoose.model('employeeData', employeeDataSchema);