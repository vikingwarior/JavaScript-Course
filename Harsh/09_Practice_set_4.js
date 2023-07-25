//Storing user input into an array
// const prompt = require("prompt-sync")();
// let nums = []
// nums.push(parseInt(prompt(`Enter a number:`)))
// console.log(nums)

//Storing Squares of numbers using Map
n = [1, 2, 3, 4, 5]
sq = n.map((num) => {
    return num*num
})

console.log(sq)

//Calculate Factorial of array number using reduce

let nums = [1,2,3,4,5]
n = nums.reduce((n1, n2) => {
    return n1*n2
})
console.log(n)