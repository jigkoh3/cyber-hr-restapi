var express = require("express");
var bodyParser = require('body-parser')
module.exports = function() {
    var app = express();
    var setAccess = function(req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    }
    app.use(setAccess);
    //middle ware
    app.use(bodyParser.json());

    //require("../app/routes/index.route")(app);
    //require("../app/routes/employee.route")(app);
    //require("../app/routes/benefitsMaster.route")(app);

    require("../app/routes/crud.routes.js")(app,'EmployeeData')
    require("../app/routes/crud.routes.js")(app,'BenefitsMasterData')



    return app;
}
