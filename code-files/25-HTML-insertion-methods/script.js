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

// element.before -> This method inserts before the element container on which it is invoked.
let b = document.createElement("h3");
b.innerHTML += "Using elem.before()";
elem.before(b);

// element.after -> Inserts the given object after the element on which this method is being invoked
let c = document.createElement("h3");
c.innerHTML += "Using elem.after()";
elem.after(c);

// element.replaceWith -> Replaces the element on which it is being used with element provided in the paranthesis.
let d = document.createElement("h3");
d.innerHTML += "Using elem.replaceWith()";
elem.replaceWith(d);

// Practical Application:

let ip; // = parseInt(prompt(`Which operation would you like to perform:
// 1. Text Based Insertion
// 2. Element Based Insertion
// 3. Append Method
// 4. Prepend Method
// 5. Before
// 6. After
// 7. Replace
// 8. Delete

// Enter the corresponding no. continue..........
// `));

let placeHolder = document.getElementsByClassName("placeholder")[0];
console.log(placeHolder);

let replacePlaceholder = (placeholderElement) => {
  switch (placeholderElement) {
    case 1:
        placeHolder.innerHTML = "<h1></h1>";
      break;

    case 2:
      break;

    case 3:
      break;

    case 4:
      break;

    case 5:
      break;

    case 6:
      break;

    case 7:
      break;

    case 8:
      break;

    default:
      break;
  }
};
