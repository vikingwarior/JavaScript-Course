let elem = document.getElementById("outer");

// .hasAttribute -> Specifies whether a given element has the specified attribute like a class, id, style, script, href etc.
console.log(elem.hasAttribute("class"));
console.log(elem.hasAttribute("href"));

elem = document.getElementsByClassName("inner")[0];

// .setAttribute -> Used to modify/add the attribute and it's value
elem.setAttribute("style", "color: green;");
elem.setAttribute("hidden", "true");

// .removeAttribute -> can be used to remove attributes from the selected elements
elem.removeAttribute("hidden");

// .attributes -> Returns a NamedNodeMap of all the valid attrubutes that are set for a given element
console.log(elem.attributes);