/**
 * Cookies -> key-value pair seperated by a dash([KEY]-[VALUE]) stored in a browser which are seperated from other cookies by semicolon(;). 
 */

// To view cookies currently present inside the browser for a given web-page document.cookie can be used.
console.log(document.cookie); 

// To add a cookie inside the browser, we can simply assign a value to doument.cookie

document.cookie = "name=harsh";

// Cookies have a special property, if a new value is assigned to a cookie, it simply appended to the cookie instead of replacing the entire value of that cookie
document.cookie = "lastName=Paradkar"; 

console.log(document.cookie); 

// Cookies can show unexpected or irregular behavior if a special character is inserted as a value, to handle this and append special characters as cookie keys or calues EncodeURIComponent can be used. 

document.cookie = encodeURIComponent(`"SpecialcookieInsertion"="name"`);

console.log(document.cookie);