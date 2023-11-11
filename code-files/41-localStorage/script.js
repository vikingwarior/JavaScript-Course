// localStorage -> Method of storing key-value pairs(both of type string.) inside the local memory of the device for a given website in such a way that it stays persistent. i.e. stays in browser even after refresh and closing browser window.

// To set a local storage entry, we need to use:

localStorage.setItem("name", "Harsh Paradkar");
localStorage.setItem("surname", "Paradkar");
localStorage.setItem("country","India");

// To remove an item from localstorage we use:

localStorage.removeItem("surname");

// To update a value of an entry inside localStorage use setItem propery with key and new value

localStorage.setItem("name", "Harsh");

// All the keys are stored in the sequence of their creation, and can be accessed by index or key

// Accessing by key ->
console.log(localStorage.getItem(`country`));

// Accessing by index ->
console.log(localStorage.getItem(1));


// To delete all the data storage ->
localStorage.clear();


// To find the no of items in localStorage.length() ->
console.log(localStorage.length);