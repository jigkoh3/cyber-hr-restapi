module.exports = function(app) {
    var ctrl = require("../controllers/benefitsMaster.controller");

    app.route("/api/BenefitsMaster")
        .get(ctrl.listBenefits)
        .post(ctrl.createBenefists);

    app.route("/api/BenefitsMaster/:_id")
        .get(ctrl.read)
        .put(ctrl.update)
        .delete(ctrl.delete);

    app.param("_id",ctrl.getBnfByID);
}
