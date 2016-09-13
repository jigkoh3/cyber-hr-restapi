module.exports = function(app) {
    var ctrl = require("../controllers/employee.controller");

    app.route("/api/EmployeeDatas")
        .get(ctrl.listEmployee)
        .post(ctrl.createEmployee);

    app.route("/api/EmployeeDatas/:_id")
        .get(ctrl.read)
        .put(ctrl.update)
        .delete(ctrl.delete);

    app.param("_id",ctrl.getEmpByID);
}
