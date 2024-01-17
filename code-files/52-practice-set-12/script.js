// Q1 ->

async function printMessage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 2000);
  });
}

(async function(){
    await printMessage("Hello");
    await printMessage("World");
})();


// Q2 -> Finding Average of Numbers in an array using spread syntax

let arr = [11, 62, 37, 14, 15];

function getAvg(...nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    return Math.floor(sum / arr.length);
}

console.log(getAvg(...arr));

// Q3 -> 