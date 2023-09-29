// setTimeout(function, milliseconds) -> Executes the innerbody of the function after a specified milliseconds(time).

let e = document.getElementById("first");

// In this example we will use setTimeout to to insert an element inside the DOM after 10 seconds.


let elem = document.createElement("p");

elem.classList.add("highlighted-elem","thickBorder");

elem.innerHTML = "This element was inserted after 5 seconds using setTimeout()";

setTimeout(() => {
    e.insertAdjacentElement("afterend", elem);
}, 5000);

// setInterval(function, milliseconds) -> Executes the innerbody of the function after a specified milliseconds(time) and keeps on executing it after the specified time. It is like an infinite loop that runs after the specified  interval

let num = 1;
let createAndInsertElement = () => {
    let element = document.createElement("p");
    element.classList.add("highlighted-elem");
    element.innerHTML = `This element is insserted with the help of setInterval method for ${num}th time.`;
    document.body.appendChild(element);
    num++;
    console.log(num);
}
setInterval(createAndInsertElement, 2000);
