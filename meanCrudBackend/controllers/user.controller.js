const User = require('../models/user.model');
const mongoose = require('mongoose');

exports.test = function(req, res) {
  res.send('Greetings from the test controller');
}

exports.userCreate = function(req, res, next) {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  });

  user.save()
    .then((result) => {
      console.log("User Created: " + result)
      res.send("User Created: " + result)
    })
    .catch(err => {
      console.log("Error: "+ err);
      res.send("Falure: " + err)
    });
 }
exports.userDetails = function(req, res) {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.send("Falure: " + err)
  } else {
    User.findById(req.params.id)
    .then((result) => {
      console.log("User Created: " + result)
      res.send(result)
    })
    .catch(err => {
      console.log("Error: "+ err);
      res.send("Falure: " + err)
    });
  }
  
}
