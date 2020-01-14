const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
require('../server/app/model/monogodb.js');

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to users admin"});
});

// listen for requests
require('./app/routes/user.route.js')(app);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});