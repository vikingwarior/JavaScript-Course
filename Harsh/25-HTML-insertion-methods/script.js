//HTML insertion  through JS 

// First method -> fetch element and change it's inner HTML using text.

//ideal for entering shorter elements for larger methods use append or prepend methods

let elem = document.getElementById("first");
console.log(elem);
elem.innerHTML = `Inserting using elem.innerHTML plain text`;

//Second method -> For inserting large no of methods with iterative changes we can first create the methods and then  use append/prepend child 

//Create a new element
// let num = parseInt(prompt("Enter a number:"))


let a = document.createElement("div");
a.innerHTML = `<i>inserting using element creation using append child.</i>`;
/*
    In-Container methods -> These methods perform all the operations within the specified container/element. i.e. The scope of thes methods will be limited to inside the container in which they are used on. Methods ->
    -> element.append
    -> element.prepend 
*/
// element.append -> Inserts at the end of the last child node of container i.e. after the last child of the element of the element container has been closed.
elem.append(a);

// element.prepend -> Inserts at the start of the container i.e. before the first child.
elem.prepend(a);


