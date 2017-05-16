// Require Mongoose
var mongoose = require('mongoose');
//
// // Create the schema
var UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    description: String

}, {timestamps: true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models
