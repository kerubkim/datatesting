// Require the controllers
var routes = require('./../controllers/routes.js');

// Define the routes
module.exports = function(app) {

    // Tasks routes ===================================================

    // A route for getting a dummy message data
    app.get('/data-test', function(req, res) {
        routes.index(req, res);
    });
    // A route for getting all dummy users
    app.get('/users',function(req,res){
        routes.users(req,res);
    });
    // A route for creating a new user
    app.post('/users/new',function(req,res){
      routes.newuser(req,res);
    });

};
