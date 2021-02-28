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
    res.send("Falure: Invalid Id Format")
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
exports.UserUpdate = (request, response) => {
  let id = request.params.id;
  let item = request.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.send("Falure: Invalid Id Format")
  } else {
    User.findByIdAndUpdate(id, {$set: item})
    .then((result) => {
      console.log("User Updated: ")
      response.send("User Updated: ")
    })
    .catch(err => {
      console.log("Error: "+ err);
      response.send("Falure: " + err)
    });
  }
}

//delete user 
exports.UserDelete = (request, response) => {
  let id = request.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    response.send("Falure: Invalid Id Format")
  } else {
    User.findByIdAndRemove(id)
      .then((result) => {
        console.log("User Deleted: ")
        response.send("User Deleted: ")
      })
      .catch(err => {
        console.log("Error: "+ err);
        response.send("Falure: " + err)
      });
  }
}
