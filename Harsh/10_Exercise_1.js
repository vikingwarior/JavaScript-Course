const prompt = require("prompt-sync")();
let answer = Math.floor(Math.random(Math.random())*100)
let count = 0
let guess
do{
    count++
    guess = prompt(`Enter your guess:`)
    if(guess - answer > 0) console.log(`Wrong Answer!! the correct answer is smaller than ${guess}. Try again`)
    else if(guess - answer < 0) console.log(`Wrong Answer!! the correct answer is bigger than ${guess}. Try again`)
}while(answer - guess != 0)

console.log(`Congratulations!!\nYou have guessed the correct answer. Your score is:\n${100-count} Points`)