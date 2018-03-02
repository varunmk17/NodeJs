var express = require('express');
var app = express();

var port = process.env.PORT || 1331;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>hello</h1></body></html>')
});

app.get('/person/varun/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' +
    req.params.id + '</h1></body></html>')
});

app.get('/api', function(req, res) {
    res.json({ firstname:'Varun', lastname :'k' });
});

app.listen(port);
