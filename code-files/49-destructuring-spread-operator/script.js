// Destructuring -> Assignment used to unpack values from array or an object
// Or -> a short hand for a = arr[0]; b = arr[1];
let arr = [1, 2, 3, 4, 5];

let [a, b] = arr // a -> 1, b -> 2
console.log(`a:${a} b:${b}`);

let [,c,,d] = arr // c -> 2, b -> 4
console.log(`c:${c} d:${d}`);

let [e,,,...subArr] = arr // e -> 1 subArr -> [4,5]
console.log(`e:${e} subArr:[${subArr}]`);