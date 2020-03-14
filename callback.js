function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Thrishul'
    };
    callback(data);
}

greet(data => {
    console.log('This is a call back function !');
    console.log(data);
});

greet(data => {
    console.log('This is a different call back function !');
    console.log(data.name)
});







