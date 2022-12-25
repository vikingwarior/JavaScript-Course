// shift() -> removes an element from the beginning of the array
// unshift() -> adds an element from the beginning of the array
// concat() -> merge two arrays 

//sort() -> Sorts the array
// Native Sorting in JS
let nums = [32, 123, 320, 24, 240, 58, 9, 470]

// This is not traditional sorting, this will produce an output like:
// [ 123,  24, 240, 32, 320, 470,  58,  9]
nums.sort()
console.log(`Sorting:`)
console.log(`Native JS sorting:\n${nums.toString()}\n`)

// For traditional sorting, we will need to use a comparator function as shown below
let compare = (a, b) =>{
    return a-b
} 

// This is the shorthand command for above implementation
nums.sort((a, b) => {return a - b})
console.log(`Traditional sorting:\n${nums.toString()}\n`)

// Splice Function
// splice(startIndex, noOfArgumentsToBeRemoved, ArgumentsToBeReplacedWith)
// Returns -> Array of Deleted values
let numbers = [1, 2, 3, 4, 5]

let deletedValues = numbers.splice(2, 2, 1003, 1004, 1005)

console.log(`Splicing:`)
console.log(`Deleted Values During Splicing:\n${deletedValues.toString()}\n`)
console.log(`Arrays After Splicing:\n${numbers.toString()}\n`)
