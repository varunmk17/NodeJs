var person = {
    firstname: '',
    lastname: '',
    fullname: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var me = Object.create(person);
me.firstname = 'Varun';
me.lastname = 'K'

var you = Object.create(person);
you.firstname = 'Arun';
you.lastname = 'K'

console.log(me.fullname());
console.log(you.fullname());