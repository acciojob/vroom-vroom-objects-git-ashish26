
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getMakeModel() {
    return `${this.make} ${this.model}`;
  }
}


class SportsCar extends Car {
  constructor(topSpeed, make, model) {
    super(make, model);
    this.topSpeed = topSpeed;
  }

  getTopSpeed() {
    return this.topSpeed;
  }
}


const car = new SportsCar(200, "Ferrari", "Testarossa");

console.log(car.getMakeModel()); 
console.log(car.getTopSpeed());  

// function SportsCar(make, model, topSpeed) {
// 	Car.call(this,make,model)
// 	this.topSpeed = topSpeed
// }

// // Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;
// const car = new SportsCar("Toyota","Corolla")
// console.log(car.getMakeModel());
