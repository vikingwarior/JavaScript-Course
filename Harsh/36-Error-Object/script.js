// To handle errors, try-catch syntax can be used

try {
    // in this way, custom errors can be thrown
    throw new SyntaxError("This is a custom syntax error")
} catch (e) {
    console.log(`Printing Error message using e.message : ${e.message}`);
    console.log(`Printing Error name using e.name : ${e.name}`);
    console.log(`Printing Error stack using e.stack :\n${e.stack}`);
    throw MediaError(`Error in catch block ${MediaError.message}`);
}
// The finally keyword ensures that the code inside it always executes, irrespective of the situation. If it is written in a function. This block will run even if the return before it or there is an error in catch block The JS engine ensures that the code inside finally should be executed before the function is returned or error is thrown in the respective conditions
finally{
    console.log(`Finally block is executed`);
}