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
        users: function(req,res){
          // retrieving all users
          User.find({}).exec(function(err,data){
            if(err){
              res.status(400).send("Error retrieving all users");
            }else{
              res.json(data);
            }
          });
        }
        newuser: function(req,res){
          // creating user object
          var user = new User({name:req.body.name,username:req.body.username,password:req.body.password,profession:req.body.profession,description:req.body.description});
          // saving new user object
          user.save(function(err,data){
            if(err){
              res.status(400).send("Error creating a new user");
            }else{
              res.sendStatus(200);
            }
          })
        }




    }
})();
