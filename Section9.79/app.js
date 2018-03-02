var express = require('express');

var app = express();

var apiController = require('./Controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 1331;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log(req.url);
    next();
});

htmlController(app);

apiController(app);

app.listen(port);
