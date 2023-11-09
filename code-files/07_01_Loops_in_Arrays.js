let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Traditional For Loop
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

// For Each Loop
/*element is the current element of the array on which the loop is currently iterating
The value of element starts from 0th index and goes till the last index of the array and it will change to the next element in each iteration
To run forEach loop on an array, we need to pass a function as an argument to the forEach method*/

numArray.forEach((element) => {
    console.log(element);
});

//To run for each loop in reverse order, we can use the reverse method on the array and then run the forEach loop on it
numArray.reverse().forEach((element) => {
    console.log(element);
});