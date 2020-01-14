const mongoose = require('mongoose');
const User = mongoose.model('User');

function isValidData(req, res) {
    return (req.body.pname && req.body.fname && req.body.age && req.body.email);
}

//Creating function to insert data into MongoDB
function insertIntoMongoDB(req,res) {
    var user = new User();
    user.pname = req.body.pname;
    user.fname = req.body.fname;
    user.age = req.body.age;
    user.email = req.body.email;
    user.save((err, doc) => {
      if (!err)
        res.send(req.body);
      else
        console.log('Error during record insertion : ' + err);
    });
 }

 function updateIntoMongoDB(req, res) {
   User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
     if (!err) { 
        res.send(req.body);
     } else {
        console.log('Error during updating the record: ' + err);
     }
   });
 }

 function deleteFromMongoDB(req, res) {
    User.findOneAndRemove({ _id: req.body._id }, (err, doc) => {
      if (!err) { 
         res.send(req.body);
      } else {
         console.log('Error during delete the record: ' + err);
      }
   });
 }


// Create and Save a new user
exports.create = (req, res) => {
    if(!isValidData(req, res)) {
        return res.status(400).send({
            message: "Data is not valid"
        });  
    }
    insertIntoMongoDB(req,res);  
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find((err, docs) => {
    if(!err){
      res.send(docs);
    } else {
        console.log('Failed to retrieve the Course List: '+ err);
      }
  });
};

// Update user identified by the userId in the request
exports.update = (req, res) => {
    
  if(!isValidData(req, res)) {
    return res.status(400).send({
      message: "Data is not valid"
    });  
  } 
  updateIntoMongoDB(req,res);
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  if(!isValidData(req, res)) {
    return res.status(400).send({
      message: "Data is not valid"
    });  
  } 
  deleteFromMongoDB(req,res);    
};