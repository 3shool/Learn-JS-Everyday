var a = (b, c) => {
    d = b + c;
    return d
}                              //This is the first variety of arrow function





var  a = (b, c) => b + c;      //Parenthesis is optional in this case




var a = m => m * m;              //if a function has only one parameter the  parenthesis is optional



var a = (firstName, lastName) => (   
    {                                    //if a single object is returned the parenthesis is compulsory
        firstName: firstName,
        lastName: lastName
    }
)


//arrow functions cannot be used as function constructors


var a = () => this;
console.log(a());     //arrow functions donot have their own this and it always points to the window(in the browser runtime )
                      //They should not be used as methods since they donot have their this
       






