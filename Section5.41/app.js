'use strict';

var Greetr = require('./greeter.js');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('hey greeeter'+ ' ' + data);
})

greeter1.greet('Varun');