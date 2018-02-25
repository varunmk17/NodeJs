var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt',
 { encoding: 'utf8', highWaterMark: 4 * 1024});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt', 'utf-8');
 
readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});