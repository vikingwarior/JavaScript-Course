// Q1 ->

const scriptLoader = async (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement(`script`);
    console.log(src);
    script.src = src;
    document.body.append(script);
    script.onload = resolve(console.log("Script Loaded successfully!"));
  });
};

// scriptLoader("script-2.js")

// Q2 ->

const scriptLoaderAsyncAwait = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement(`script`);
    script.src = src;
    document.body.append(script);
    script.onload = resolve(console.log("Script Loaded successfully!"));
  });
};

const asyncAwaitLoader = async (source) => {
  await scriptLoaderAsyncAwait(source);
  console.log("async-await");
};

// asyncAwaitLoader("script-2.js");

//Q3 ->

/*
*   Await for this code will not work because:
*   -> setTimeout is based on asynchronus callback
    -> As soon as the 'async' sees an asynchronus part it returns the promise and wraps it in a promise and returns that statement.
    -> Therefore instead of Promise.reject() after settimeout ends it returns:
         setTimeout(() => {
 *       return Promise.reject("This Promise has been rejected");
 *       }, 3000);
 *  -> This results in setTimeout being executed after it is returned in a promise instead first executing and then returning
*/

/* let rejectedPromise = () => {
 *     setTimeout(() => {
 *       return Promise.reject("This Promise has been rejected");
 *     }, 3000);
 *   };
 */

let rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("This Promise has been rejected"), 3000);
  });
};

let getPromiseValue = async () => {
  try {
    let promise = await rejectedPromise();
    console.log(promise);
  } catch (e) {
    console.log("Error : " + e);
  }
};

// getPromiseValue();

// Q4 ->

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 resolved");
    }, 3000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 resolved");
    }, 1000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 resolved");
    }, 2000);
  });
};

// const promises = [p1, p2, p3];

const getPromisesWithAsyncAwait = async () => {
  console.time("getPromisesWithAsyncAwait");
  await p1();
  await p2();
  await p3();
  console.timeEnd("getPromisesWithAsyncAwait");
};

getPromisesWithAsyncAwait(p1, p2, p3);

const getPromisesWithAPI = (promises) => {
  console.time("getPromisesWithAPI");
  Promise.all(promises).then(() => {
    console.timeEnd("getPromisesWithAPI");
  });
};

getPromisesWithAPI([p1, p2, p3]);
