// number null boolean bigInt string symbol undefined
/*
    Avoid using var keyword as it is a legacy keyword for the following reasons:
    - A variable declared with var keyword can be redeclared in the same scope.
    - Any changes to the value of variable created with var at any level will change the value of that variable globally even if the redeclaration was done in another scope.
*/
let s = ""
t = 3
console.log(s+t)
console.log(typeof s)

const r = {
    name : 'Harsh',
    age : 9
}

// r = 3  // not possible(cannot alter a constant after declaration)
r['class'] = 3
console.log(r)

