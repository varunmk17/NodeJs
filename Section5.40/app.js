'use strict';

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`hey.. ${this.firstname} ${this.lastname}`);
    }
}

var me = new Person('Varun', 'K')
me.greet();

var you = new Person('Arun', 'K')
you.greet();


console.log(me.__proto__);