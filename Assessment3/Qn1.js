//Write a program to take a string input and display its length and last character

let input = prompt("enter a string:");
console.log(`The length of the given string is ${input.length}`);
console.log(`The last character of the given string is ${input.charAt(input.length-1)}`);