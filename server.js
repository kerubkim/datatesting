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
