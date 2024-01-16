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