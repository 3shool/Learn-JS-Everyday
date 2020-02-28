function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log('Hello ,'+this.firstName);
}

var mySelf = new Person('Thrishul', 'Sherigar');


mySelf.greet();

console.log(mySelf);
