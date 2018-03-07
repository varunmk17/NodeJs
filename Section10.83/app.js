var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds157818.mlab.com:57818/learnmongodb');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var me = Person({
    firstname: 'Varun',
    lastname: 'K',
    address: 'New York'
});

me.save(function(err){
    if(err) throw err;
    console.log('me saved !!');
});

var you = Person({
    firstname: 'Arun',
    lastname: 'K',
    address: 'Dublin'
});

you.save(function(err){
    if(err) throw err;
    console.log('arun saved !!');
});

var apiController = require('./Controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 1331;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log(req.url);

    // get all the users

    Person.find({}, function(err, users){
        if(err) throw err;

        console.log(users);
    });
   
    next();
});

htmlController(app);

apiController(app);

app.listen(port);
