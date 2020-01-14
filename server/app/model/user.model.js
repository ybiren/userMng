const mongoose = require('mongoose');
 
//Attributes of the User object
var userSchema = new mongoose.Schema({
  pname: { 
    type: String
  },
  fname: {
    type: String
  },
  email: {
    type: String
 },
 age: {
  type: Number
 }
});
 
mongoose.model('User', userSchema);