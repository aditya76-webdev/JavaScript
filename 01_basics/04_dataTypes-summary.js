/**
 * This JavaScript code demonstrates the different types of data in JavaScript, including primitive
 * types (such as strings, numbers, booleans, null, undefined, symbols, and BigInt) and reference types
 * (such as arrays, objects, and functions).
 */
/**
 * This JavaScript code demonstrates the different types of data in JavaScript, including primitive
 * types (such as strings, numbers, booleans, null, undefined, symbols, and BigInt) and reference types
 * (such as arrays, objects, and functions).
 */
// Primitive

// 7 types: String, Number, Boolean , null , undefined , symbol , BigInt 

const score= 200;
const scoreValue = 100.3;

const isLoggedIn = false ;
const outsideTemp = null ; 
let userEmail; // undefined ( can be declared manually too )

const id = Symbol ('123');
const anotherId = Symbol ('123');

// console.log(id === anotherId);

const bigNumber = 654941964489454856n;

// console.log(typeof bigNumber);

//Reference ( non- primitive) 

//Arrays , objects , functions :-

const heros = ["ironMan", "captainAmerica",'superMan'];


let myObj =
{
    name:'aditya',
    age: '18',
    

}

function bhupendrajogi() {
    console.log('hello world'); 

}

// bhupendrajogi();
// bhupendra jogi is future

// lets crack it 

//DataType Pata kaise kare ??

// we can find it by using a function "typeof":- (For more detail read "typeof operator section in ECMA Script Documentation");


// Examples of using typeof:-

// console.log(typeof heros);

console.log(typeof outsideTemp);