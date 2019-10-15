var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('resources'));

global.__basedir = __dirname;

const dbConfig = require('./config/dbConfig.js');


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        process.exit();
    });

require('./router/router.js')(app);

// Create a Server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})