// Hoisting -> The way in which the JS engine interprets the code to move all the declarations to top of the code, which gives the ability to us to invoke a method or refernce a variable before the declaration.

// Hoisting works differently for different types of declartions 

// var -> If a variable is called before inititalization it will return 'undefined' and only return it's true value in the calls after its declaration

console.log(a); // this will print undefined
var a = 1;
console.log(a); // this will print the actual value

// let and const -> If a variable is called before inititalization it will throw an error and only return it's true value in the calls after its declaration

console.log(b); // This will throw an error
let b = 2;
console.log(b); // This will show the value corresponding to b

console.log(c); // This will throw an error
const c = 3;
console.log(c); // This will show the value corresponding to b
