var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.htm', 
    {encoding: 'utf-8'});

    var message = 'Hello World. !';
    html = html.replace('{Message}', message);

    res.end(html);
        
}).listen(1331, '127.0.0.1')