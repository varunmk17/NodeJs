var express = require('express');
var mysql = require('mysql');
var app = express();

var apiController = require('./Controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 1331;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log(req.url);

    var con = mysql.createConnection({
        host:"localhost",
        user: "dev",
        password: "dev123",
        database: "devdirectory"
    });

    con.query("Select id, name from users", 
    function(err, rows) {
        if(err) throw err;
        console.log(rows);
    });
    next();
});

htmlController(app);

apiController(app);

app.listen(port);
