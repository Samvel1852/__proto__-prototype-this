// Create a method in the Person class which returns how another person's age compares. Given the instances
// p1, p2 and p3, which will be initialized with the attributes name and age,return a sentence in the following
// format:
// {other person name} is {older than / younger than / the same age as} me.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(p) {
    if (this.age === p.age) {
      return this.name + " is the same age as " + p.name;
    } else if (this.age > p.age) {
      return this.name + " is older than " + p.name;
    } else if (this.age < p.age) {
      return this.name + " is younger than " + p.name;
    }
  }
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function compareAge(name, age) {
//   if (this.age === age) {
//     return this.name + "is the same age as" + name;
//   } else if (this.age > age) {
//     return this.name + "is older than" + name;
//   } else if (this.age < age) {
//     return this.name + "is younger than" + name;
//   }
// }

// compareAge.prototype = Person;

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1, p2, p3);

console.log(p1.compareAge(p2));
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."
