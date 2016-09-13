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
    EducationInfo: [{
        EducationLevelEI: String,
        InstitutionEI: String,
        MajorEI: String,
        DateFromEI: Date,
        DateToEI: Date
    }],
    WorkExperienceInfo: [{
        CompanyWI: String,
        DateFromWI: Date,
        DateToWI: Date,
        PositionWI: String,
        JobDescWI: String,
        SalaryWI: Number,
        ReasonWI: String
    }],
    LanguageInfo: [{
        LanguageTypeLI: String,
        SpeakingLI: String,
        WritingLI: String,
        ReadingLI: String
    }],
    SpecialInfo: {
        TypingSI: String,
        TypingTHSI: Number,
        TypingENSI: Number,
        ComputerSI: Boolean,
        ComputerDescSI: String,
        DrivingSI: Boolean,
        DrivingNoSI: String,
        OfficeMachineSI: String,
        HobbiceSI: String,
        SportSI: String,
        KnowledgeSI: String,
        OtherSI: String
    },
    OtherInfo: {
        WorkCountryOI: String,
        WorkCountryDescOI: String,
        FirtNameOI: String,
        LastNameOI: String,
        RelatedOI: String,
        AddressOI: String,
        TelOI: String,
        SourceInfoOI: String,
        ContagiousFlagOI: String,
        ContagiousDescOI: String,
        FirtNameWorkRelativeOI: String,
        LastNameWorkRelativeOI: String,
        IntroduceYoureSelfOI: String
    },
    RegardInfo: {
        BenefitsInfo: [{
            NameBN: String,
            DetailBN: String
        }],
        PositionRI: String,
        SalaryRI: Number,
        StartDateRI: Date
    },
    CertificateInfo: {
        DateRecordCI: String,
        FirstNameCI: String,
        LastNameCI: String,
        PositionCI: String,
        DateStartCI: String,
        SalaryCI: Number,
        DatePrintCI: Date,
        BossSign: String
    },
    EvaluationInfo: {
        DateConfirmedEV: Date,
        JobLearningEV: Number,
        JobKnowledge_SkillEV: Number,
        AdaptationEV: Number,
        RulesRespectEV: Number,
        CommunicationEV: Number,
        AttitudeEV: Number,
        Planning_FollowingEV: String ,
        Decision_SolvingEV: Number,
        ResponsibilityEV: Number,
        CooperationEV: Number,
        SumP5EV: Number,
        SumP4EV: Number,
        SumP3EV: Number,
        SumP2EV: Number,
        SumP1EV: Number,
        TotalScoreEV: Number,
        PercentEV: Number,
        OtherEV: String,
        EvaluationTypeEV: String
    },
    IncreaseInfo: [{
        DetailIn: String,
        AmountIn: Number,
        StartDateIn: Date,
        EndDateIn: Date
    }],
    DeductionInfo: [{
        DetailDe: String,
        AmountDe: Number,
        StartDateDe: Date,
        EndDateDe: Date
    }],
    SilpInfo: [{
        CompanyName: String,
        Period: Date,
        DatePay: Date,
        AmountSalary: Number,
        AmountTax: Number,
        AmountSSO: Number,
        TotalAmountIncrease: Number,
        TotalAmountDeduction: Number,
        NetIncome: Number,
        Recipient: String,
        DateReceive: String,
        NameRecord: String,
        NameCheck: String
    }],
    Created: {
        type: Date,
        default: Date.now
    },
    CreatedBy: String,
    Updated: Date,
    UpdatedBy: String,
});
mongoose.model('EmployeeData', employeeDataSchema);
