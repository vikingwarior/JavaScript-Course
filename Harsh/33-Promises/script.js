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
 * They both pose resemblence to try and catch
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
 * Attaching Multiple Handlers -> When a given promise object has more than one instances of Object.then attached to it
 *
 */

promise.then(() => {
  console.log("This is the first handler of multiple Promise Handlers")
});

promise.then(() => {
  console.log("This is the second handler of multiple Promise Handlers")
});

promise.then(() => {
  console.log("This is the third handler of multiple Promise Handlers")
});

/**
 * Promise chaining -> Promise chaining is the process to attach promises to the end of a promise. These promises are often dependent on each other's output
 *
 */

let promiseChaningContainer = promise
  .then(
    () => {
      console.log("Promise chain invoked");
      return y;
    },
    () => {
      console.log("Failed to Invoke chain");
    }
  )

  .then(
    (num) => {
      console.log(`Element no ${num} of chain invoked`);
      return num + 1;
    },
    () => {
      console.log("Chain of promises broke");
      return reject(); // This will mark the next promise in the chain as rejected and therefore explictly trigger the catch block of its trailing promise. If we won't return reject() explicitly this will then trigger then block of the trailing promise and the variable(num) will be passed as 'undefined'.
    }
  )

  .then(
    (num) => {
      console.log(`Element no ${num} of chain invoked`);
      return num + 1;
    },
    () => {
      console.log("Chain of promises broke");
      return reject();
    }
  )

  .then(
    (num) => {
      console.log(`Element no ${num} of chain invoked`);
      return num + 1;
    },
    () => {
      console.log("Chain of promises broke");
    }
  );
