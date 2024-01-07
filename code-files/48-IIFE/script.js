
function a(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Executed after 3 seconds`);
        }, 3000);
    })
};

// IIFE -> a function that is invoked as soon as it is defined. Used to avoid giving Names to functions which won't be reused.
(async function() {
    let b = await a();
    console.log(b);
})();