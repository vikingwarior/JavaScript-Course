// Strings in JavaScript can also be created using `` along with '' and ""
// Char from strings can be sliced using indexes
let name = `Harsh`
let surname = 'Paradkar'

//Variables can directly inserted into string using template literals if the string is made using ``
//using template literals to manipulate string is called string interpolation
console.log(`${name} ${surname}`)

//Escape Sequences

// \ followed by ` or' or "" is used to print any of these 3 as strings
console.log(`learning something \`new`)
console.log('learning something \'new')
console.log("learning something \"new")

// \t is used to add tabspacing to text
console.log(`learning something \tnew`)

// words  followed by \r are used to replace the leading n words
console.log(`learning something \rnew`)


/**
 * String Methods:
 * - slice(startIndex, endIndex) -> Slices the string between given sequences
 * - replace("old", "new") -> Replaces a said part of the string with given input
 * - concat(string...) -> concatinates given input at the end of our string
 * - trim() -> removes trailing and leading spaces of a given string
 */
