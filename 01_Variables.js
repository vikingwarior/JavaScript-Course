/*
    Avoid using var keyword as it is a legacy keyword for the following reasons:
    - A variable declared with var keyword can be redeclared in the same scope.
    - Any changes to the value of variable created with var at any level will change the value of that variable globally even if the redeclaration was done in another scope.
*/
var n = 23 // a contains 67
console.log(n)
n = "viking"
console.log(n)
// let 44viking = 23 // Not allowed this will throw an error
// let var = 23