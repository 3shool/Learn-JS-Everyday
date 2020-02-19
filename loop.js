// //Understanding Loops


for (let i = 0; i < 10 ; i++) {
    console.log(i);
}

// /*

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// */


// //while loop

var  i = 10;

while(i > 0) {
    if(i == 5)
        continue;
    console.log(i);
    i--;
}



// //do while loop



i = 10;


do {
    console.log(i);
    i--;
}while(i > 0);



//for in loop


var a = {
    name :'Thrishul',
    place:'Mangalore'
}

for(let prop in a) {
    console.log(`${prop} : ${a[prop]}`);
}


//for of loop

a = [1, 3 , 4, 5, 8, 9];

for(let i of a) {
    console.log(i);
}