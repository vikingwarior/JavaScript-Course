// setTimeout(function, milliseconds) -> Executes the innerbody of the function after a specified milliseconds(time).

let e = document.getElementById("first");

// In this example we will use setTimeout to to insert an element inside the DOM after 10 seconds.


let elem = document.createElement("p");

elem.classList.add("highlighted-elem","thickBorder");

elem.innerHTML = "This element was inserted after 5 seconds using setTimeout()";

setTimeout(() => {
    e.insertAdjacentElement("afterend", elem);
}, 5000);

// setInterval(function, milliseconds) -> Executes the innerbody of the function after a specified milliseconds(time) and keeps on executing it after the specified time.