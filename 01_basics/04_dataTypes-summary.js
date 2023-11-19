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

/* The line `const bigNumber = 654941964489454856n;` is declaring a constant variable named `bigNumber`
and assigning it a BigInt value. BigInt is a new data type in JavaScript that allows you to work
with integers larger than the maximum safe integer value. The `n` suffix after the number indicates
that it is a BigInt value. */
const bigNumber = 654941964489454856n;



/* The code `console.log(typeof bigNumber);` is using the `typeof` operator to determine the data type

of the variable `bigNumber`. It will log the result to the console. */
console.log(typeof bigNumber);

//Reference ( non- primitive) 

//Arrays , objects , functions :-

/* The line `const heros = ["ironMan", "captainAmerica",'superMan'];` is declaring a constant variable
named `heros` and assigning it an array of strings. The array contains three elements: "ironMan",
"captainAmerica", and "superMan". */
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

 /* The code `console.log(typeof heros);` is using the `typeof` operator to determine the data type of
 the variable `heros`. It will log the result to the console. */
 console.log(typeof heros);

/* The code `console.log(typeof outsideTemp);` is using the `typeof` operator to determine the data
type of the variable `outsideTemp`. It will log the result to the console. */
console.log(typeof outsideTemp);


//falsy Value:- 



// All of the following values are falsy:

false
/* The value `false` is a boolean primitive type in JavaScript. It represents the logical value of
"false" and is used to indicate that a condition is not true. */


null
/* In JavaScript, `null` is a primitive value that represents the intentional absence of any object
value. It is often used to indicate that a variable or object property does not have a value
assigned to it. */

undefined
/* In JavaScript, `undefined` is a primitive value that is assigned to a variable when it is declared
but not assigned a value. It represents the absence of a value. It is often used to indicate that a
 variable or object property does not have a value assigned to it. */

// 0
// -0

NaN
/* `NaN` stands for "Not a Number" and it is a special value in JavaScript that represents an invalid
or unrepresentable mathematical result. It is typically returned when a mathematical operation fails
or when a value is not a valid number. For example, dividing a number by zero or performing
arithmetic operations on non-numeric values will result in `NaN`. */

// An empty string ('')




//####################################Memory############################################//

// Stack (Primitive), Heap(Non-primitive)

let myYoutubeName= 'AdityaJain';

let anotherName = myYoutubeName;

anotherName = "jujutsu kaisen";

// console.log(myYoutubeName);

// console.log(anotherName);

// Non- Primitive:-

let userOne = {
    email:"aditya@email.com",
    upi:"aditya@ybl",
}

let userTwo = userOne;

userTwo.email="kumkum@email.com";

console.log(userOne.email);

console.log(userTwo.email);


// Summary of Memory Management :-

// 1).for all the primitive type data stored in the form of stacks

// 2). for all the non-primitive type data stored in the form of heaps



