// Create a draw for following code

const arr = [1, 2, 3];

const human = {
  isHuman: true,
};

const str = "";

const user = {
  name: "Vrezh",
  __proto__: human,
};

const car = {
  hasEngine: true,
};

const mercedes = {
  name: "mercedes",
  __proto__: car,
};

const bmw = Object.create(null);

const emptyObj = {};

function fn() {
  console.log("hello, world!");
}

const emptyWithoutProto = Object.create(null);

const num = 12;

const isAuth = false;

// for arr
console.log(
  arr.__proto__ === Array.prototype, // arr extends from Array.prototype
  Array.prototype.__proto__ === Object.prototype, // Array.prototype extends from Object prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);

// for const human = {
// isHuman: true,
// };

console.log(
  human.__proto__ === Object.prototype,
  Object.prototype.__proto__ === null
);

console.log(
  str.__proto__ === String.prototype, // str extends from String's prototype
  String.prototype.__proto__ === Object.prototype, // String.prototype extends from Object prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
  //   Object.__proto__ === Function.prototype,
  //   Function.prototype.__proto__ === Object.prototype
);

console.log(
  user.__proto__ === human, // user.prototype extends from human
  human.__proto__ === Object.prototype, // human.prototype extends from Object.prototype
  Object.prototype.__proto__ === null //Object.prototype extends from null
);

console.log(
  car.__proto__ === Object.prototype, // car.prototype extends from Object.prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);

console.log(
  mercedes.__proto__ === car, //mercedes.prototype extends from car, car has no prototype
  car.__proto__ === Object.prototype, // car.prototype extends from Object.prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);

//********************************// bmw doesn't inherit from anything
console.log(bmw === Object.prototype, bmw, Object.prototype); // cannot understand why false
//*********************************

console.log(
  emptyObj.__proto__ === Object.prototype, // emptyObj extends from Object.prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);

console.log(
  fn.__proto__ === Function.prototype, // fn extends from Function.prototype
  Function.prototype.__proto__ === Object.prototype, // Function.prototype extends from Object.prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);

console.log(
  emptyWithoutProto.__proto__ === null, // cannot understand why false, // this doesn't inherit from anything
  Object.prototype.__proto__ === null // cannot understand why false
);

console.log(
  num.__proto__ === Number.prototype, // num extends from Number.prototype
  Number.prototype.__proto__ === Object.prototype, // Number.prototype extends from Object.prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);

console.log(
  isAuth.__proto__ === Boolean.prototype, // isAuth extends from Boolean.prototype
  Boolean.prototype.__proto__ === Object.prototype, // Boolean.prototype extends from Object.prototype
  Object.prototype.__proto__ === null // Object.prototype extends from null
);
