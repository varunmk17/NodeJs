var express = require('express');
var app = express();

var port = process.env.PORT || 1331;
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
    res.render('person', {ID: req.params.id});   
});

app.get('/api', function(req, res) {
    res.json({ firstname:'Varun', lastname :'k' });
});

app.listen(port);
