var employeeData = require('mongoose').model('employeeData');
exports.listEmployee = function(req, res, next) {
    employeeData.find({}, function(err, employees) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(employees);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.employees);
};

exports.update = function(req, res, next) {
    var date = new Date();
    date.toISOString();
    req.body.Updated = date;
    employeeData.findByIdAndUpdate(req.employees._id, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(req.body);
        }
    });
};

exports.delete = function(req, res, next) {
    // employeeData.findByIdAndRemove(req.employees._id, function(err) {
    //     if (err) {
    //         return next(err);
    //     } else {
    //         res.json(req.employees);
    //     }
    // });
    req.employees.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.employees);
        }
    });
};

exports.getBnfByID = function(req, res, next, _id) {
    employeeData.findById(_id, function(err, employees) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            req.employees = employees;
            next();
        }
    });
};

exports.createBenefists = function(req, res, next) {
    console.log(req.body);
    var EmployeeData = new employeeData(req.body);

    console.log('================================');
    console.log(EmployeeData);
    EmployeeData.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(EmployeeData);
        }
    });
};