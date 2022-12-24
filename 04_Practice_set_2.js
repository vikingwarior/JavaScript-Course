const marks = {
    harry : 98,
    rohan : 70,
    aakash : 7
};

//traditional approach
for (let i = 0; i < Object.keys(marks).length; i++) {
   console.log(marks[Object.keys(marks)[i]])
}

//ES6 revamped approach
for(let key in marks){
    console.log(marks[key])
}

