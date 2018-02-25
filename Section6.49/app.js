function greet(callback) {
    console.log('helloo.');
    var data = {
        name: 'Varun'
    };
    callback(data);
    console.log('callback completed.')
}


greet(function(data){
    console.log(`callback invoked: ${data.name}`);
});

greet(function(data){
    console.log(`callback invoked 2: ${data}`);
});