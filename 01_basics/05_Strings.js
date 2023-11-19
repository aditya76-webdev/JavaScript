const userName = "aditya";
const repoCount = "16";

/* The `console.log(userName + repoCount + 8 + "    Value");` statement is concatenating the values of
`userName`, `repoCount`, `8`, and the string `"    Value"`. */
// console.log(userName + repoCount + 8 + "    Value"); // outdated instead of using this use backtick.


/* The `console.log(`Hello my Name is  and my repoCount is  `);` statement is
printing a message to the console. It uses template literals to concatenate the values of `userName`
and `repoCount` into the message. This makes the code more readable and easier to understand. */
// console.log(`Hello my Name is ${userName} and my repoCount is ${repoCount} `); //more readable

const newGame = new String("AdityaJain");

// console.log(newGame.length);

// console.log(typeof newGame);

// console.log(newGame.toUpperCase());

// console.log(newGame.toLowerCase());

// console.log(newGame.charAt(6));

// console.log(newGame.indexOf("J"));

/* The line `const newString = newGame.substring(0,6);` is creating a new variable `newString` and
assigning it the value of a substring of the `newGame` string. The `substring()` method is used to
extract a portion of a string. In this case, it is extracting characters from index 0 to index 5
(6th position is not included) from the `newGame` string. The extracted substring is then assigned
to the `newString` variable. */
const newString = newGame.substring(0,6); // 6th position char not included thats why stopped at "a"

// console.log(newString);

/* The line `const anotherString = newGame.slice(-8, 6);` is creating a new variable `anotherString`
and assigning it the value of a slice of the `newGame` string. The `slice()` method is used to
extract a portion of a string. */
const anotherString = newGame.slice(-8, 6); // we can also give -ve indexing in slice.and -8 diya hai then piche se start hoga;

// console.log(anotherString);

// const Game = "AdityaJain"; // We can also define string in this way.

// console.log(Game.length);

// console.log(typeof newGame);

// console.log(newGame.toUpperCase());

// console.log(newGame.toLowerCase());

// console.log(newGame.charAt(6));

// console.log(newGame.indexOf("J"));

/* The line `const newStringOne = "     Kumkum      ";` is declaring a new constant variable
`newStringOne` and assigning it the value of the string `"     Kumkum      "`. This string contains
leading and trailing whitespace characters. */
const newStringOne = "     Kumkum      ";

// console.log(newStringOne);

/* The line `// console.log(newStringOne.trim());` is a commented out code. It is not being executed.
However, if it were to be executed, it would remove the leading and trailing whitespace characters
from the `newStringOne` string using the `trim()` method. */
// console.log(newStringOne.trim());

url = "https://aditya.com/aditya%20jain";

console.log(url.replace("%20","-"));

console.log(url.includes("kumkum"));

console.log(url.includes("aditya"));











