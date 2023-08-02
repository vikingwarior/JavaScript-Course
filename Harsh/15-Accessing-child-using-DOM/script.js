console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// elements can also be called using indexes childNodes Nodelist
let childNodes = document.body.childNodes;
console.log(childNodes[0]);
console.log(typeof childNodes);

// To convert this Nodelist into Array
let childNodesArray = Array.from(childNodes);
console.log(childNodesArray);