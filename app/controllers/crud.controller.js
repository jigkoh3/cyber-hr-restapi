 var ctr = {
     modelData: null,
     getList: function(req, res, next) {
         ctr.modelData.find({}, function(err, data) {
             if (err) {
                 console.log(err);
                 return next(err);
             } else {
                 res.json(data);
             }
         });
     },
     read: function(req, res) {
         res.json(req.data);
     },
     update: function(req, res, next) {
         var date = new Date();
         date.toISOString();
         req.body.Updated = date;
         ctr.modelData.findByIdAndUpdate(req.data._id, req.body, function(err, data) {
             if (err) {
                 return next(err);
             } else {
                 res.json(req.body);
             }
         });
     },
     delete: function(req, res, next) {
         // employeeData.findByIdAndRemove(req.employees._id, function(err) {
         //     if (err) {
         //         return next(err);
         //     } else {
         //         res.json(req.employees);
         //     }
         // });
         req.data.remove(function(err) {
             if (err) {
                 return next(err);
             } else {
                 res.json(req.data);
             }
         });
     },
     getByID: function(req, res, next, _id) {
         ctr.modelData.findById(_id, function(err, data) {
             if (err) {
                 console.log(err);
                 return next(err);
             } else {
                 req.data = data;
                 next();
             }
         });
     },
     create: function(req, res, next) {
         console.log(req.body);
         var ModelData = new ctr.modelData(req.body);

         console.log('================================');
         console.log(ModelData);
         ModelData.save(function(err) {
             if (err) {
                 return next(err);
             } else {
                 res.json(ModelData);
             }
         });
     }

 };
 module.exports = function(name) {
     var ctrl = ctr;
     ctrl.modelData = require('mongoose').model(name);

     return ctrl;

 }
