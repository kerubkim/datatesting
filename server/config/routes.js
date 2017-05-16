// Require the controllers
var routes = require('./../controllers/routes.js');

// Define the routes
module.exports = function(app) {

    // Tasks routes ===================================================
    app.get('/users-test', function(req, res) {
        routes.index(req, res);
    });


};
