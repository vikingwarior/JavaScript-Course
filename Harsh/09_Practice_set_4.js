//Take input from user and add it to an array
const prompt = require("prompt-sync")();
let nums = [];
while (true) {
    let input = prompt("Enter a number to add to the array: ");
    if (input == '0') {
        break;
    }
    nums.push(Number(input));
}
console.log(`Array: ${nums}`);

//Filtering the numbers divisible by 10
console.log(`Number divisible by 10: ${nums.filter((value) => {return value%10 === 0})}`);
