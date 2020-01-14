module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create user
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);
   
    // Update user by _id
    app.put('/users', users.update);

    // Delete user by _id
    app.delete('/users', users.delete);
}