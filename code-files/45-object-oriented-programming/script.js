class BaseClass {
  constructor() {
    console.log(`Base Constructor called`);
  }

  test() {
    console.log(`Base Class Test Method`);
  };

  static greet() {
    console.log('This is a static function directly invoked from BaseClass.greet()');
  }
}

class DerivedClass extends BaseClass {
  constructor(param) {
    console.log(`Value passed in the constructor : ${param}`);
    super();
  }

  invokeTest() {
    super.test();
  }

  test = () => console.log(`Derived Class Test Method`);
}

let derObj = new DerivedClass(`23/09/2000`);
derObj.invokeTest();


// Static method -> A method of class that can be directly called on the class (i.e.Without creating its object is called static method).
BaseClass.greet();

// If you pass a static function from the object, it will throw an error(because it is not present in the prototype of the object.)
// derObj.greet();