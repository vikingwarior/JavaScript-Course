//Q1
let firstChildOfNavBar = document.body.getElementsByTagName("ul")[0].firstElementChild;
console.log(firstChildOfNavBar);
firstChildOfNavBar.style.color = "red";

//Q3
let navBarList = document.body.getElementsByTagName("ul")[0];
navBarList.firstElementChild.style.color = "green";
navBarList.lastElementChild.style.color = "green";

//Q4
let liElementTags = document.getElementsByTagName("li");
// console.log(liElementTags);
for (let element of liElementTags) {
    element.style.backgroundColor = "cyan";
}

//or

Array.from(liElementTags).forEach(element => {
    element.style.background = "cyan";
});