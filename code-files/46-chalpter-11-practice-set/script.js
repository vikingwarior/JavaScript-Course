// Q1 ->
class ComplexNumber{
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }

    // Q2 ->
    static addComplexNo(n1, n2){
        let realSum = n1.real + n2.real;
        let imaginarySum = n1.imaginary + n2.imaginary;

        return new ComplexNumber(realSum, imaginarySum);
    }

    get complexNo() {
        return `${this._real} + ${this._imaginary}i`;
    }

    // Q5 ->
    get real() {
        return this._real;
    }    

    get imaginary() {
        return this._imaginary;
    } 

    set real(real) {
        this._real = real;
    }    

    set imaginary(imaginary) {
        this._imaginary = imaginary;
    }    

}

let c1 = new ComplexNumber(1, 2);
let c2 = new ComplexNumber(5, 9);

console.log(c1.complexNo);


let sum = ComplexNumber.addComplexNo(c1, c2);
console.log(sum.complexNo);

// Q3 ->
class Human {
    greet(){
        console.log(`Hello, I am a human`);
    }
}

class Student extends Human {
    greet(){
        console.log(`Hello, I am a Student`);
    }
}

const student = new Student();

student.greet();

// Q4 ->
console.log(student instanceof Human);