var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'ho hooo';

var greet3b = require('./greet3');
greet3.greet(); 

var Greet4 = require('./greet4');
var grt4 = new Greet4();
grt4.greet();

var greet5 = require('./greet5').greet;
greet5();