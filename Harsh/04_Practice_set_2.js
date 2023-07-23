// const marks = {
//     harry : 98,
//     rohan : 70,
//     aakash : 7
// };

// //traditional approach
// for (let i = 0; i < Object.keys(marks).length; i++) {
//    console.log(marks[Object.keys(marks)[i]])
// }

// //ES6 revamped approach
// for(let key in marks){
//     console.log(marks[key])
// }

// Structure of a function
// let(declaration) functionName = (parameters) => {logic to be executed}

// Function to calculate average of numbers

let avg = (n1, n2, n3) =>{
    return((n1+n2+n3)/3)
}

console.log(avg(1,2,3))