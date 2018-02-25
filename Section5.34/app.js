var eventConfig = require('./config').events;
var Emitter = require('events');

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('helloo1');
});

emtr.on(eventConfig.GREET, function(){
    console.log('helloo2');
})

emtr.emit(eventConfig.GREET);
