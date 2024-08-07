//  creating strings

let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let backtickString = `Hello, world!`;

console.log(singleQuoteString);

// String cancatination

let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; // Using + operator
let fullNameTemplate = `${firstName} ${lastName}`; // Using template literals

console.log(fullNameTemplate);

// Accessing charecters 

let str = 'JavaScript';
let firstChar = str[0]; // 'J'
let secondChar = str.charAt(1); // 'a'

console.log(firstChar);

// String length

let str1 = 'JavaScript';
let length = str.length; // 10

console.log(length);

// String Methods

let str2 = 'JavaScript';
let upperCaseStr = str.toUpperCase(); // 'JAVASCRIPT'
let lowerCaseStr = str.toLowerCase(); // 'javascript'

console.log(upperCaseStr);

let str3 = '   Hello, world!   ';
let trimmedStr = str.trim(); // 'Hello, world!'

//  Template Literals

let name = 'John';
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
// 'Hello, my name is John and I am 30 years old.'

