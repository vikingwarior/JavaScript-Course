// Closures -> A function returned with it's lexical environment

function a() {
    let val = 1;
    console.log(val);

    function b() {
        console.log(val);
    }
    val = 2;

    return b; // This is a closure
}

let f = a();
f();