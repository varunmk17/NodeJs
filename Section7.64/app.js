var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, 
            {'Content-Type': 'application/json'});
        var obj = {
            firstname: 'Varun',
            lastname: 'k'
        };
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end();
    }

}).listen(1331, '127.0.0.1');