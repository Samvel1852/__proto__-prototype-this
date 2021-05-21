// Car Constructor
// *Write a Car constructor that initializes model and milesPerGallon from arguments.
// *All instances built with Car:
// *should initialize with an tank at 0
// *should initialize with an odometer at 0
// *Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
// *STRETCH: Give cars ability to .drive(distance). The distance driven:
// *Should cause the odometer to go up.
// *Should cause the tank to go down taking milesPerGallon into account.
// *STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// *The drive method should return a string "Iran out of fuel at x miles!" x being odometer.

class Car {
  tank = 0;
  odometer = 0;
  constructor(milesPerGallon) {
    this.milesPerGallon = milesPerGallon;
  }
  fill(petrolVolume) {
    this.tank += petrolVolume;
  }
  drive(distance) {
    this.odometer += distance;
    this.tank -= this.milesPerGallon * distance;
    if (this.tank <= 0) {
      return `I ran out of fuel at ${this.odometer} miles`;
    }
  }
}

let bmw = new Car(1);
bmw.fill(10);
console.log(bmw.tank);
console.log(bmw.drive(10));
console.log(bmw.tank);
