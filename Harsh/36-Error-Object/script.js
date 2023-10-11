// To handle errors, try-catch syntax can be used

try {
    // in this way, custom errors can be thrown
    throw new SyntaxError("This is a custom syntax error")
} catch (e) {
    console.log(`Printing Error message using e.message : ${e.message}`);
    console.log(`Printing Error name using e.name : ${e.name}`);
    console.log(`Printing Error stack using e.stack : ${e.stack}`);
}