let obj1 = document.getElementsByTagName("div")[0];
console.log("Used console.log so objects are printed in HTML tree:");
console.log(obj1);
console.log(" ");

//console.dir function
console.log(`Used console.dir, so elements are printed as a JS object instead of a HTML Tree:`);
console.dir(obj1)
console.log(" ");

//.nodeName function
console.log(".nodeName function -> Tells the type of current node(it can be a tag like <span>, <div>, etc. or Text, Comment node.)\nFor ex:");
console.log(`Name of the the node of blank space in body{document.body.firstChild.nodeName} -> ${document.body.firstChild.nodeName}`)
console.log(`Name of the the node of first tag in body {document.body.firstElementChild.nodeName} -> ${document.body.firstElementChild.nodeName}`)
console.log(" ");

// .tagName function
console.log(".tagName function -> Will tell which is the tag of a given variable, let us find tag of obj1 that we just defined. This only works for element nodes:");
console.log(`obj1.tagname -> ${obj1.tagName}`);
console.log(" ");

// .innerHTML function:
console.log(`.innerHTML function -> used to get all the data including HTML tree structure inside a given object it may consist of text, comments, nested tags or a combination of all of them\nFor ex: Let us find the innerHTML of obj1`);
console.log(`innerHTML for obj1 -> ${obj1.innerHTML}`);
console.log(" ");

// .outerHTML function:
console.log(".outerHTML function -> gives the HTML tree structure the including object we are using the function for:");
console.log(`outerHTML for obj1 -> ${obj1.outerHTML}`);
console.log(" ");

//.data and .nodeValue
console.log(".data function -> can be used to fetch value that is inside a given object, works only for non element nodes");
console.log(".data of document.body.firstChild -> " + document.body.firstChild.data);
console.log(" ");

console.log(".nodeValue function -> can be used to fetch value that is inside a given object");
console.log(".nodeValue of obj1 -> " + obj1.nodeValue)
console.log(" ")

//.textContent function:
console.log(".textContent function -> Only fetches the text that is inside the heirarchy of the given element tree and ignores all the HTML syntax");
console.log(".textContent of obj1 -> " + obj1.textContent)
console.log(" ")

//.hidden property
console.log(".hidden property -> This property is by default 'false' but if set to 'true' The element will be hidden on the UI, however it can still be accessed using DOM")