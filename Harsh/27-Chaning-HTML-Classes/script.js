let t = document.getElementsByClassName("brownText thickBorder")[0];

console.log("Displaying the element : " + t);

// elementName.classList -> this method returns the all the classes that are attached to a given element in the form of an indexed list.
console.log("Displaying the classList of HTML element :" + t.classList);

// elementName.classList.add -> this method adds a class to the given element.
t.classList.add("greenBackground");
console.log("Using elementName.classList.add(greenBackground) method result: " + t.classList);

// elementName.classList.remove -> this method removes a class from the given element.
t.classList.remove("brownText");
console.log("Using elementName.classList.remove(brownText) method result : " + t.classList);

// elementName.classList.contains -> this method checks if the given element contains the given class or not.
console.log(t.classList);
console.log("Using elementName.classList.contains(greenBackground) method result: " + t.classList.contains("greenBackground"));

// elementName.classList.toggle -> this method toggles the given class on the given element i.e. if the class is present on the element then it removes it and if the class is not present on the element then it adds it.
t.classList.toggle("greenBackground");
console.log("Using elementName.classList.toggle(greenBackground) method result: " + t.classList);