class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(10, 3));
console.log(calculator.subtract(10, 3));
console.log(calculator.multiply(10, 3));
console.log(calculator.divide(9, 3));

let calc = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  subtract: (a, b) => a - b,
};

function Calcul(a, b) {
  this.a = a;
  this.b = b;
}

Calcul.prototype = calc;

let calcul = new Calcul();

console.log(calc.add(1, 2));
console.log(calc.subtract(2, 3));
console.log(calc.multiply(2, 3));
console.log(calc.divide(10, 2));
