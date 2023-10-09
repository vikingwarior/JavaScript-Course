/**
 *  JavaScript code runs in an asychronus fashion
 *  i.e. if an entity is taking time to load the JS engine lets that code run in the background and it goes on and executes the code in the next lines and comes back and fetches the result.
 * While this is good for effeciency, this can lead to false results as the execution of the snippet is essential to ensure accurate or intended results
 * 
 * To encounter this, async and await are used.
 */
// async -> When this keyword is used while function, it defines the JS engine that []. The functions with async keyword will always return a promise.

// await -> when used it pauses the JS execution thread until the specified async function or promise has not been resolved.


// This is a normal function in this promise b will retrn the result first resulting in b.then executing before a.then even though it was written after a.then due to the asynchronus nature of JS.

let sampleFxn = () => {
    let a = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise a resolved"), 3000);
    });

    let b = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise b resolve"), 1000);
    });

    a.then((value) => console.log(value));
    b.then((value) => console.log(value));
}

// If we want the result of b to be shown after a even though it executes before a and without using .then, we can simply make the function async and await the result of a, as soon 'await' is seen before a the execution will stop and the engine will wait for promise a to be fulfilled before parsing any data that comes after it.

// Additionally the need to use .then keyword and writing a function to fetch the result state is also gone. This results into more cleaner and readable code.

let sampleAsyncFxn = async () => {
    let a = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise a resolved using async-await"), 3000);
    });

    let b = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise b resolved using async-await"), 1000);
    });

    let resA = await a;
    console.log(resA);

    let resB = await b;
    console.log(resB);
}

// sampleFxn();
sampleAsyncFxn();