//Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

let decimal = 15;
console.log("The decimal number is " + decimal);
let binary = decimal.toString(2);
console.log("The binary number is " + binary);
let hexadecimal = decimal.toString(16);
console.log("The hexadecimal number is " + hexadecimal);
let octal = decimal.toString(8);
console.log("The octal number is " + octal);