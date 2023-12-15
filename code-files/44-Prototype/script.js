/**
 Prototype -> Consider this a blueprint of a JS object that has a set of properties defined. 
 - When we try to read a property of an object that is missing, it is by default taken from prototype of that object.
 - If you want modify/add to/mutate the [[Prototype]] of an object you can use OBJECT_NAME.__proto__ to access the Prototype.
 - An object can hav "Multiple level" of prototypes.
 */

 // WARNING -> PROTOTYPE is depricated due to very slow operation in every browser and JavaScript engine
let organiztion = {
    oName : `PTC`
};

let greetProto = {
  greet: () => {
    console.log(`Hello World!`);
  },
};

greetProto.__proto__ = organiztion;

console.log(greetProto);

let employee = { name: `Harsh`, DOB: `23 Sept 2000` };

employee.__proto__ = greetProto;

employee.greet();
console.log(employee.oName);