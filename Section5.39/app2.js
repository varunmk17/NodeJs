var util = require('util');

function Person(){
    this.firsname = 'Varun';
    this.lastname = 'K';
}


function Policeman(){
    Person.call(this);
    this.badgenumber = '123';
}

Policeman.prototype.greet = function(){
    console.log(`hey..${this.firsname} and ${this.badgenumber}`);
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();