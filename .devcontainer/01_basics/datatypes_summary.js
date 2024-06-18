//  Primitive datatypes :- 

//  7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 32778878898878789789n 



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ("shaktiman", "naagraj", "doga")
 let myObj = {
    name: "swati",
    age: 22,
}

const myfunction = function() {
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp)
console.log(typeof anotherId)