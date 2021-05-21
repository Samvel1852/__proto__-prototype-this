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
