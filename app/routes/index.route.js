module.exports = function(app) {
    var ctr = require("../controllers/index.controller");
    
    app.route("/")
       .get(ctr.listUser)
       .post(ctr.createUser);

    app.route("/:_id")
       .put(ctr.update)
       .delete(ctr.delete)
       .get(ctr.read);
       
    app.param("_id",ctr.getUserByID);
};