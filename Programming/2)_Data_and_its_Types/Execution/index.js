

let num = 42;           // This is a Number
console.log(typeof num); // "number"

let bigIntNum = 123456789012345678901234567890n; // This is a BigInt
console.log(typeof bigIntNum); // "bigint"

// You can create Big int by appending n and using BigInt().

let bigIntFromNumber = BigInt(1234567890);    // Converts a number to BigInt
console.log(bigIntFromNumber); // 1234567890n

let bigIntFromString = BigInt("123456789012345678901234567890"); // Converts a string to BigInt
console.log(bigIntFromString); // 123456789012345678901234567890n

let singleQuotes = 'Hello';
let doubleQuotes = "World";
let backticks = `JavaScript`;

console.log(singleQuotes);  // Output: Hello
console.log(doubleQuotes);  // Output: World
console.log(backticks);     // Output: JavaScript

// Multi-line string using backticks
let multiLine = `This is a
multi-line
string`;
console.log(multiLine);


const name = 'John';
const age = 30;

// Using template literals for string interpolation
const greeting = `Hello, my name is ${name} and I'm ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is John and I'm 30 years old.

// Multi-line string using template literals
const multiLine2 = `This is a
multi-line string
using template literals.`;

console.log(multiLine2);
// Output:
// This is a
// multi-line string
// using template literals.