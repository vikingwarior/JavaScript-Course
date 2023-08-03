// getElementsByClassName fetches all the elements that contain a given class/es
let ctitle = document.getElementsByClassName("card-title")[0];
console.log(ctitle);
ctitle.style.color = "purple"

// Return the NodeList of documents that match the given CSS queries
console.log(document.querySelectorAll(".card-title"));
let cardTitle = document.querySelectorAll(".card-title");
cardTitle[0].style.color = "pink";
cardTitle[1].style.color = "red";
cardTitle[2].style.color = "green";