const User = require('../models/user.model');
const mongoose = require('mongoose');

exports.test = function(req, res) {
  res.send('Greetings from the test controller');
}
//create user
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
//get user
exports.userDetails = function(req, res) {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.send("Falure: ")
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
//update user
exports.UserUpdate = (req, res) => {
  let id = req.params.id;
  let item = req.body;

  User.findByIdAndUpdate(id, {$set: item})
  .then((result) => {
    console.log("User Updated: " + result)
    res.send("User Updated: " + resultresult)
  })
  .catch(err => {
    console.log("Error: "+ err);
    res.send("Falure: " + err)
  });
}
