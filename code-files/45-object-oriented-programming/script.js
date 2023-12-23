class BaseClass {
  constructor() {
    console.log(`Base Constructor called`);
  }

  test() {
    console.log(`Base Class Test Method`);
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
