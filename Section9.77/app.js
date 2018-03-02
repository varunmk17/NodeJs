var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.PORT || 1331;

var urlencoderParser = bodyparser.urlencoded({extended: false});

var jsonParser = bodyparser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log(req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index', {ID: req.params.id});    
});

app.get('/person/:id', function(req, res) {
    res.render('person', {ID: req.params.id, 
    Qstr: req.query.qstr });   
});

app.post('/person', urlencoderParser,  function(req, res) {
    res.send('Thank You');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser,  function(req, res) {
    res.send('Thank You from json parser!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});


app.get('/api', function(req, res) {
    res.json({ firstname:'Varun', lastname :'k' });
});

app.listen(port);
