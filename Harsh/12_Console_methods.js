// console.log(console)
// console.warn("lol warning")
// console.error("lol error")

// //asserts if condition is ttrue
// console.assert(2>1)

// a = {a:1, b:2, c:3}
// console.table(a)

//Starts the timer for a givne label
// console.time('o1')

// //Returns the time it took the specified label to reach the particular point
// console.timeEnd('o1')

//count the time taken by for loop
console.time('forcounter')
for (let index = 0; index < 500; index++) {
    let n = 0
    
}
console.timeEnd('forcounter')
let i = 0;
console.time('whilecounter')
while(i++ < 500) {
    let n = 0
    
}
console.timeEnd('whilecounter')