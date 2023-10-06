/**
 * Promise -> It is a placeholder to contain the response of an asynchronus method.
 *  Syntax let variableName = new Promise((resolve, reject) => {logic})
 *                                         |<-Js Engine    |
 *                                         |reservedkeywords->|
 *   - resolve() -> Can be used to explicitly mark the promise as fulfilled
 *   - reject() -> Can be used to explicitly mark the promise as failed and to throw an error
 *
 *  Understanding promises by a sample code:
 */

let Pname = "Harsh";
// Pname = undefined;
let age = 20;
// age = 1;

const promise = new Promise((resolve, reject) => {
  if (Pname == undefined || Pname == null || age < 18) {
    console.log("Promise Failed");
    reject(`${Pname} is not a real name find a real name :P`);
  } else {
    console.log("Promise fullfilled");
    resolve(`Promise executed you have a valid name ${Pname}`);
  }
});

console.log(promise);

/**
 * Promise.then -> If the promise is executed successfully, then the logic mentioned inside the logic is executed
 * Promise.catch -> This stores logic to handle the case in which a promise is rejected
 *
 * They both are linked to each other and often written in an if-elsequece fashion
 */

promise.then(
  (success) => {
    // This is the function for when promise succeeds
    console.log("Showing execution of a successful promise");
  },
  (failure) => {
    // This is the function for when promise fails
    console.error(
      "sorry your promise has been broken and you have been deemed a lair for breaking it"
    );
  }
);

/**
 * Promise chaining -> Promise chaining is the process to attach promises to the end of a promise. These promises are often dependent on each other's output
 *
 */
