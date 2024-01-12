// Destructuring -> Assignment used to unpack values from array or an object
// Or -> a short hand for a = arr[0]; b = arr[1];
let arr = [1, 2, 3, 4, 5];

let [a, b] = arr // a -> 1, b -> 2
console.log(`a:${a}\nb:${b}`);

let [,c,,d] = arr // c -> 2, b -> 4
console.log(`c:${c}\nd:${d}`);

let [e,,,...subArr] = arr // e -> 1 subArr -> [4,5]
console.log(`e:${e}\nsubArr:[${subArr}]`);

//Spread -> Syntax that allows to extract arguments from an iterable structure and map them accordingly

let obj = {...subArr};
console.log(obj);

// To override values with spread
let obj2 = {
    name: "Harsh",
    empId: "001",
    role:"employee"
};

console.log({...obj2, empId:"002"}); // This syntax will reflect changed values
console.log({role: "admin", ...obj2}); // This syntax will reflect old values