const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
  { 
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number
  }
) 

module.exports = mongoose.model('user', userSchema)