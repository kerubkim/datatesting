// =========================================================================
// ============================== Require ==================================
// =========================================================================
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    port = 8000;

require('colors');


// =========================================================================
// =============================== Setup ===================================
// =========================================================================
var app = express();
app.use(bodyParser.urlencoded({ extended: true })); // <----- need this to recieve req.body from iOS call
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static("./bower_components"));
// Add headers for CORS
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// =========================================================================
// ============================= Database ==================================
// =========================================================================
require('./server/config/mongoose.js');


// =========================================================================
// =============================== Routes ==================================
// =========================================================================
require('./server/config/routes.js')(app);


// =========================================================================
// =============================== Listen ==================================
// =========================================================================
app.listen(port, function() {
    console.log(`It's over ${port}!!!`.blue);
});
