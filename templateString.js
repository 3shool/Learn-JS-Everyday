var a = `Thrishul ${returnTrue()?'Sherigar':(returnFalse()?'Thrishul':'Devadiga')}`;


// console.log(a);

function returnTrue(){
    return true;
}


function returnFalse() {
    return false;
}


//tagged Templates
//Java script provides with a way to atg a string with function this is called tagged templates


function highlight(strings, name, place) {
    for(var i = 0; i < strings.length; i++) {
        // console.log(strings[i]);
    }

    // console.log(name);


    // console.log(place);

    return 'Mangalore';
}

var name = 'Thrishul';


var place = 'Sherigar';


var a = highlight `my name is ${name} and iam from ${place}`;

// console.log(a);


//Raw strings
//Raw string helps you to process the passed as it is without processing escape sequences



function highlight1(string) {
    // console.log(string);
    console.log(string.raw[0]);
}

//Creating raw Strings


var m = String.raw `My name is thrishul Sherigar and \n\n`;

console.log(m);


//