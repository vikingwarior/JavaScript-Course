// callbacks -> Passing a function(say A) to another function(say B) as an argument and then invoking A inside B

// Callbacks should be avoided for the following reasons:
/** 1. Inversion of control -> This is a vulnerability with callbacks i.e. we pass the function inside callbacks. So the user can trigger them inside callbacks even though we intended to call the function with a different reason.

 *
 * Let us take this example function(variable, callbackFunction);
 * {
 *      if(callbackFunction == true){return 1;}
 *      if(callbackFunction() === false)(return new Error)
 * }
 * Here, user can easily trigger the false flag and thus cause unexpected behavior. Hence this is a security issue.
 * 
 * 2. Callback hell: When there callbacks nested inside callbacks which are nested inside callbacks and so on.. This grows the size of code horizonatally, makes the code less readable, slow and difficult to maintain
 */

let scriptLoader = (scriptSource, theFunctionToExecutePassedAsArgument) => {
  let scriptObject = document.createElement("script");
  scriptObject.src = scriptSource;
  scriptObject.onload = () => theFunctionToExecutePassedAsArgument("Harsh"); // The function which was passed as an argument is being invoked
  document.body.appendChild(scriptObject);
};

let sampleFunction = (name) => {
  console.log(`Hello ${name}!!`);
  document.body.insertAdjacentText(`afterbegin`, `Hello ${name}!!`);
};

// Error Handling using callbacks
let scriptLoaderWithErrorHandling = (
  scriptSource,
  theFunctionToExecutePassedAsObject
) => {
  let scriptObject = document.createElement("script");
  scriptObject.src = scriptSource;
  scriptObject.onload = () => theFunctionToExecutePassedAsObject("Harsh"); // The function which was passed as an argument is being invoked
  scriptObject.onerror = () =>
    theFunctionToExecutePassedAsObject(
      new Error("Script Loading Error(404)"),
      "Harsh"
    ); // The function handles if there is an error
  document.body.appendChild(scriptObject);
};

let sampleFunctionWithErrorHandling = (errorMessage, name) => {
    if (errorMessage) {
      console.log(`Hello ${name}!!`);
      document.body.insertAdjacentText(`afterbegin`, `Hello ${name}!!`);
    } else {
        console.log(`Hello ${name}!!`);
        document.body.insertAdjacentText(`afterbegin`, `Hello ${name}!!\nThere seems to be an error with message "${errorMessage}"`);
    }
};

let source = "h";
// scriptLoader(source, sampleFunction); //Function passed as an argument
scriptLoaderWithErrorHandling(source, sampleFunctionWithErrorHandling); //Function passed as an argument
