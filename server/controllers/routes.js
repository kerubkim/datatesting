// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var User = mongoose.model('User');



module.exports = (function() {
    return {

        index: function(req, res) {
          //return that data in res.json()
          res.json({message: "This is a dummy data.",reason:"For testing purposes."});

        }





    }
})();
