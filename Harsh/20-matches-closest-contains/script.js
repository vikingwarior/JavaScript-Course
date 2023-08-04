// If Id of a HTML element is directly passed in console.log or anywhere inside the JS it can directly fetch element associated with it, however it is not recommended practice as this property is browser dependent and might not work with all the browsers.
console.log(id1);
console.log(id2);


let id_1 = document.getElementById("id1");
console.log(id_1);

// {variableName}.matches function -> checks whether the element used with matches function contains the query elements specified query inside the mathces function.

// Let us take the following element as an example:
{/* <div id="id1" class="elem test">This is element 1</div> */}

// These queries will return true
console.log(id_1.matches(".elem"))
console.log(id_1.matches("#id1"))
console.log(id_1.matches(".test"))
console.log(id_1.matches("#id1.elem"))
console.log(id_1.matches("#id1.test"))
console.log(id_1.matches(".elem.test"))
// Note -> Query elements should not contain spaces it will result in fake negative results even though the query might be correct. For ex
console.log(id_1.matches("#id1 .elem"))
console.log(id_1.matches("#id1.elem .test"))

//{variableName}.closest -> Checks if the element matches gives CSS Selector query, if it doesn't then it will go up in the heirarchy until it finds a suitable match.

let sp1 = document.getElementById('sp1')
console.log(sp1)
console.log(sp1.closest(".elem"))
// NOTE -> using '' is resulting in unstable results, use of "" is recommended.

//{variableName}.contains -> Tells whether the provided inside a given query contains the specfied node; the contained node can either be a children node or the original node iteself, both of which will return true.

console.log(id_1.contains(sp1))