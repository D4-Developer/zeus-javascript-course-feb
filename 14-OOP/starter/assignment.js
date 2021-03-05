'use strict'

// #1
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    // console.log(this.speed + 'km/h');
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

Car.prototype.brake = function () {
    this.speed -= 5;
    // console.log(this.speed + 'km/h');
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// BMW.accelerate();



// #2
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
}
  
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);



// #3

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

// console.log(EV.prototype);
EV.prototype = Object.create(Car.prototype); /// Inheritance binding

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
}

EvalError.prototype.chargeBattery = function () {
  this.speed += 20;
  this.charge --;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}


const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();



