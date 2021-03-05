'use strict';


/*
const Person = function (firstName, birthYear) {
    console.log(this);

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this for class methods
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

// use new keyword to make a instance of class
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function authmatically return {}

const darshan = new Person('Darshan', 2000);
const tirth = new Person('Tirth', 1999);
console.log(darshan, tirth);

const a = 'ABC';
// return True / False
console.log(a instanceof Person); // False



// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
}

jonas.calcAge();
darshan.calcAge();
tirth.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // True

console.log(Person.prototype.isPrototypeOf(jonas)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False


// adding new property to .prototype
Person.prototype.newProperty = 'new on prototype';
console.log(jonas.newProperty, darshan.newProperty); // new on prototype;

console.log(jonas.hasOwnProperty('firstName')); // True
console.log(jonas.hasOwnProperty('newProperty')); // False




console.log(jonas.__proto__); // Person.prototype 
// Object.prototype (top of the protoype chain)
console.log(jonas.__proto__.__proto__);// Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);

const arr = [1,2,2,5,10,6,5,6]; // === new Array();
console.log(arr.__proto__ === Array.prototype); // True

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__); // null


Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
};
Person.hey();

// jonas.hey(); // -- error --
*/


/*
// THIS IS INSANE
// From now all array can use this .unique method 
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x+1);

*/



/*
////// ::::::::::::::::::  ES6 Class :::::::::::::::::::::: //////
////// ::::::::::::::::::  ES6 Class :::::::::::::::::::::: //////
// as classes are special kind of function


// class expression
const PersonCE = class {}

// class declaration
class PersonC1 {
    constructor(fullName, birthYear) {
        this.fullName = fullName; // this will invoke setter
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() { 
        return this._fullName;
    }
    
    get age() {
        return 2021 - this.birthYear;
    }
    
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const p1 = new PersonC1('jessica davis', 1996);
console.log(p1);
p1.calcAge();
console.log(p1.age);


PersonC1.prototype.greet = function() {
    console.log(`hey ${this.fullName}`);
}
p1.greet();

// STATIC method call
PersonC1.hey();
// p1.hey(); // -- error --

// 1. Classes are NOT hoisted :: we must use after it's declaration
// 2. Class are first-class citizens
// 3. Classes are always executed in strict-mode

// const walter = new PersonC1('Walter', 1965); // cause the alert 

const account = {
    owner: 'Jonas',
    movements: [200,300,120,500],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(now) {
        this.movements.push(now);
    }
}

console.log(account.latest); // don't write account.latest() 
account.latest = 50;
console.log(account.movements);
*/



/*
//  Object.create();
const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },

    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven); // we have calcAge() inside <prototype>: property

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge(); // 19 

console.log(steven.__proto__);
console.log(PersonProto); // same as above statement: steven.__proto__ === PersonProto

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/



///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

/*
const PersonI = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
  
PersonI.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    PersonI.call(this, firstName, birthYear); // :::::::::::::::::
    this.course = course;
};

// Linking prototypes
// this is not the target as now student.prototype referce to PersonI.prototype
// Student.prototype = PersonI.prototype; 
console.log(Student.prototype); // = Object.
Student.prototype = Object.create(PersonI.prototype);
console.log(Student.prototype); // = PersonI.prototype / Object.

Student.prototype.introduce = function () { // :::::::::::::::: 
console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // T
console.log(mike instanceof PersonI); // T :: see 240 line
console.log(mike instanceof Object); // Class chain has Object in last

console.dir(Student.prototype.constructor); // = 
Student.prototype.constructor = Student; // fixes as constuctor = PersonI
console.dir(Student.prototype.constructor);
*/



//
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

/*
class PersonC {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
}
  
class StudentC extends PersonC { // ::::::::::::::
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear); // :::::::::::::::
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
        `I'm ${2037 - this.birthYear} years old,
        but as a student I feel more like 
        ${ 2037 - this.birthYear + 10}`);
    }
}

const martha = new StudentC('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/



///////////////////////////////////////
// Inheritance Between "Classes": Object.create

/*
const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },

    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear); // ::::::::::::::
    this.course = course;
}
StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 1999, 'Computer science');

jay.introduce();
jay.calcAge();
*/



//////////////////////////////////////////////////
//  Class Example

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
  
    // 2) Private fields (instances)
    #movements = [];
    #pin;
  
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
  
      // Protected property
      // this._movements = [];
      // this.locale = navigator.language;
  
      console.log(`Thanks for opening an account, ${owner}`);
    }
  
    // 3) Public methods
  
    // Public interface
    getMovements() {
      return this.#movements;
    }
  
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
  
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
  
    requestLoan(val) {
      // if (this.#approveLoan(val)) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
  
    static helper() {
      console.log('Helper');
    }
  
    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
      return true;
    }
  }
  

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withDraw(150);
acc1.requwstLoan(1000);
// acc1.approveLoan(1000); // this should not be a public API

acc1.getMovements();