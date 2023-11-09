let elem1 = document.getElementById("outer");

// .hasAttribute -> Specifies whether a given element has the specified attribute like a class, id, style, script, href etc.
console.log(elem1.hasAttribute("class"));
console.log(elem1.hasAttribute("href"));

let elem2 = document.getElementsByClassName("inner")[0];

// .setAttribute -> Used to modify/add the attribute and it's value
elem2.setAttribute("style", "color: green;");
elem2.setAttribute("hidden", "true");

// .removeAttribute -> can be used to remove attributes from the selected elements
elem2.removeAttribute("hidden");

// .attributes -> Returns a NamedNodeMap of all the valid attrubutes that are set for a given element
console.log(elem2.attributes);

/*
    data-[attributeName] can be added in HTML to create attribute variables and they can be fetched in JS using:

    [elementName].dataset -> Returns a Map of all the custom data variables and their corresponding values
    [elementName].dataset.[attributeName] -> to fetch value
*/

console.log(elem1.dataset);
console.log(elem1.dataset.name);

// Trial of projects
// console.log()
// let insertIfTrue = () => {
//     let Name =  prompt("Enter Validation Value");
//     if (elem1.dataset.name === Name) {
//         elem2.innerHTML += ` Congratulations ${Name} for the correct guess`
//     }
//     else{
//         elem2.innerHTML = ` LOL Noob`
//     }
// }

// insertIfTrue();
