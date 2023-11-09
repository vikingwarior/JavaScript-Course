/**
 *  Promise API -> The promise API is a class that contains methods for various operations of promises
 */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p1 is now invoked.");
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise p2 is not invoked.");
  }, 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p3 is now invoked.");
  }, 2000);
});

// Promise.all(promises...) -> waits till all the specified promises passed inside this method are executed, throws error if all the passed promises are not invoked.

let promises = Promise.all([p1, p2, p3]);



// Promises.allSettled(promises...) -> This method stores all the results of specified promises, their returned values or errors(in case the mentioned promise gets rejected) and returns the array of all this data
promises = Promise.allSettled([p1, p2, p3]);



// Promises.race(promises...) -> Returns the first promise that has been executed first irrespective of results.
console.log(Promise.race([p1, p2, p3]));



// Promises.any(promises...) -> Returns the first fulfilled promise among the given list of promises
console.log(Promise.any([p1, p2, p3]));



//Promise.resolve() -> Creates a resolved promise
promises = Promise.resolve("Promise with explicit resolved() state");



//Promise.reject() -> Creates a rejected promise
promises = Promise.reject("Promise with explicit reject() state");



promises.then((value) => {
  /**This is the value retured by p1, p2 and p3 in resolve()/reject() we are passing it so that it can be printed to console*/
  console.log(value);
});




