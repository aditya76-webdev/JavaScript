/* The code snippet is written in JavaScript and it demonstrates various concepts and features of the
language. */


"use strict";
/* "use strict"; is a directive that enables strict mode in JavaScript. When strict mode is enabled,
the JavaScript interpreter enforces stricter rules and generates more errors for common mistakes. It
helps to write more reliable and bug-free code by preventing the use of certain error-prone features
and enforcing best practices. */


// alert('hello');

console.log('aditya'); 

// alert(3+3);// no popup becoz we are using nodejs not browser

let name = 'aditya';
let age = 18;

let isLoggedIn = true ;
/* The line `let isLoggedIn = true;` is declaring a variable named `isLoggedIn` and assigning it the
value `true`. This variable is being used to store the information about whether a user is logged in
or not. The `let` keyword is used to declare a block-scoped variable in JavaScript. */


// null => standalone value

/* The line `// null => standalone value` is a comment that provides a brief explanation of the concept
of `null` in JavaScript. It states that `null` is a standalone value, meaning it is a special value
that represents the intentional absence of any object value. In JavaScript, `null` is often used to
indicate that a variable or object property does not have a value assigned to it. */

//  undefined => value not assigned yet
/* The comment `//  undefined => value not assigned yet` is explaining the concept of `undefined` in
JavaScript. It is stating that when a variable is declared but not assigned a value, its default
value is `undefined`. This means that the variable exists, but it does not have a defined value. */

console.log(typeof 'aditya');
/* The line `console.log(typeof 'aditya');` is using the `console.log()` function to print the type of
the value `'aditya'` to the console. The `typeof` operator is used to determine the type of a value
in JavaScript. In this case, it is checking the type of the string `'aditya'`. The output of this
line will be `string`, indicating that `'aditya'` is a string data type. */

console.log(typeof age);

console.log(typeof null);  // op=> object
console.log(typeof undefined); // op=> undefined