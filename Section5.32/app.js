// object properties and method

var obj = {
     greet: 'Helloo'
};

console.log(obj.greet);
console.log(obj['greet']);

// functions and arrays

var arr = [];
arr.push(function(){
    console.log('Hello world 1');
});
arr.push(function(){
    console.log('Hello world 2');
});
arr.push(function(){
    console.log('Hello world 3');
});

arr.forEach(function(item){
    item();
})