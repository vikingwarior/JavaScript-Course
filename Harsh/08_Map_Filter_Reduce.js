let arr = [23, 27, 18]

//Array Map Method:
// map method creates a duplicate value of an array
/* 
It is similar to for each but the key difference is:
map method cannot be used transform an existing array
*/

/*
contains 3 parameters
-value 
-index
-array
*/

let a = arr.map((value, index, array) => {
    // console.log(`Map method:\n${value} ${index} (${array})\n`)
    return value + 1
});
console.log(`Map method:\n${a}\n`)

