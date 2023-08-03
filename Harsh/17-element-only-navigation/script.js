let b = document.body;

// b.firstChild -> Fetches the first element in b, it can be anything like a space, text, tag, etc.
console.log(b.firstChild);

// b.firstElementChild -> It will fetch only the first element inside b. i.e. it will fetch the first tag that it finds inside b , it will ignore all the comments and blank spaces that will lie in between 
console.log(b.firstElementChild);

