module.exports = function(app, name) {
    var ctrl = require("../controllers/crud.controller")(name);

    app.route("/api/" + name + "s")
        .get(ctrl.getList)
        .post(ctrl.create);

    app.route("/api/" + name + "s" + "/:_id")
        .get(ctrl.read)
        .put(ctrl.update)
        .delete(ctrl.delete);

    app.param("_id", ctrl.getByID);
}
