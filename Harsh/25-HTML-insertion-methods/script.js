//HTML insertion  through JS 

// First method -> fetch element and change it's inner HTML using text.

//ideal for entering shorter elements for larger methods use append or prepend methods

let elem = document.getElementById("first");
console.log(elem);
elem.innerHTML = `Inserting using elem.innerHTML plain text`;

//For inserting large no of methods with iterative changes we can use append/prepend child method

//Create a new element

let num = parseInt(prompt("Enter a number:"))
let a = document.createElement("div");
for (let i = 0; i < num; i++) {
    a.innerHTML = a.innerHTML + `LOL ${i}`;
    console.log(a);
    elem.appendChild(a);    
}