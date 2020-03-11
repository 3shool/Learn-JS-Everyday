var obj = {
    name: 'John Doe',
    greet: function(...args) {
        console.log(`hello!! ${this.name}`);
        console.log(args[0]);
        console.log(args[1]);
    }
}

var obj1 = {
    name: 'Jane Doe'
}




obj.greet.call(obj1, 'Namma', 'Bengaluru');

obj.greet.apply(obj1, ['Namma', 'Mangalore']);


var newGreet = obj.greet;

let a = newGreet.bind(obj);
a('Namma', 'Puttur');