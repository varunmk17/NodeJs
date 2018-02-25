var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

console.log('function complete.1'); 

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data){
    if(err == null){
        console.log('file read complete.')
        console.log(data);
    }
});

console.log('function complete.2'); 