var bodyparser = require('body-parser');
var urlencoderParser = bodyparser.urlencoded({extended: false});

module.exports = function(app) {
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
}