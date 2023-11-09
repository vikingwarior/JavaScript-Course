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

//Array filter method:
//returns the value which are true for given fuction

a = arr.filter((value) => { return value > 20 })
console.log('Filter Method\n' + a + '\n')

// Array Reduce Method:
// Reduces an array to a singular value by following our custom built criteria

let red_arr = [1, 2, 9, 3, 7, 9]
console.log(`Sample array for reduce function:\n${red_arr}`)
let r = red_arr.reduce((num) => {
    console.log(num)
    return num
})
console.log(`Array reduce function:\n${r}`)