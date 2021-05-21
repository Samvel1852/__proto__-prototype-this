// Person Constructor
// * Write a Person Constructor that initializes name and age from arguments.
// * All instances of Person should initialize with an empty stomach array.
// * Give instances of Person the ability to .eat("someFood"):
// * When eating an edible, it should be pushed into the stomach.
// * The eat method should have no effect if there are 10 items in the stomach.
// * Give instances of Person the ability to .poop():
// * When an instance poops, its stomach should empty.
// * Give instances of Person a method .toString():
// * It should return a string with name and age. Example: "Mary, 50"

class Person {
  stomach = [];
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(food) {
    if (typeof food === "string") {
      if (this.stomach.length < 10) {
        this.stomach.push(food);
      }
    }
    return this.stomach;
  }
  poop() {
    this.stomach = [];
    return this.stomach;
  }
  toString() {
    return this.name + ", " + this.age;
  }
}

let armen = new Person("Armen", 25);

console.log(armen.eat("meat"));
console.log(armen.eat("sugar"));
console.log(armen.eat(4));
console.log(armen.poop());
console.log(armen.toString());
