var obj = {
    name: 'varun k',
    greet: function(){
        console.log(`Hey.. ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Arun K'});
obj.greet.apply({name: 'Arun K'});