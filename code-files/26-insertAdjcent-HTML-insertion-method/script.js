let elem = document.getElementById("elem");
console.log(elem);

// .insertAdjcentHTML -> This methods inserts HTML in the surrounding of the elment on which it is being invoked. The position on which the specified HTML would be inserted is dependent on the mode in which it is being invoked.

// Refer the lines and inspect the HTML structure to see how each of the mode of this function works
elem.insertAdjacentHTML("afterbegin", "Inserting using afterbegin mode");
elem.insertAdjacentHTML("beforebegin", "Inserting using beforebegin mode");
elem.insertAdjacentHTML("afterend", "Inserting using afterend mode");
elem.insertAdjacentHTML("beforeend", "Inserting using beforeend mode");
