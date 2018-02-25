var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('helloo1');
});

emtr.on('greet', function(){
    console.log('helloo2');
})

emtr.emit('greet');

var emtr2 = new Emitter();

emtr2.on('say', function(){
    console.log('hey u..')
})

emtr2.on('say', function(){
    console.log('hey u.. 2')
})

emtr2.emit('say');
