var person = {
    firstName: '',
    lastName: 'Sherigar',
    greet: function() {
        console.log('hello ' + this.firstName + ' ' + this.lastName);
    }
}


var john = Object.create(person); //the object passed as a parameter to the Object.create  will be the  __proto__ of the resultant object. 
john.firstName = 'john';
// john.lastName = 'Doe'
console.log(john.greet());