// class Rectangle {
//   // Setup
//   constructor(_width, _height, _color) {
//     console.log("The Rectangle is being created");
//     this.width = _width;
//     this.height = _height;
//     this.color = _color;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   printDescription() {
//     console.log(`I am a rectangle of ${this.width} and I am ${this.color}`);
//   }
// }

// let myRectangle1 = new Rectangle(2, 3, "blue");
// console.log(myRectangle1.getArea());
// myRectangle1.printDescription();

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestedForArea = 0;
//   }

//   get area() {
//     this.numOfRequestedForArea++;
//     return this.width * this.height;
//   }

//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }

// let square1 = new Square(25);
// square1.area = 25;
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);

// console.log(square1.numOfRequestedForArea);

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }
//   static equals(a, b) {
//     return a.width * a.height === b.width * b.height;
//   }

//   static isValidDimensions(width, height) {
//     return width === height;
//   }
// }

// let square1 = new Square(8);
// let square2 = new Square(9);

// console.log(Square.isValidDimensions(6, 6));

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   describe() {
//     console.log(`I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// class Programmer extends Person {
//   constructor(_name, _age, _yearsOfExperience) {
//     super(_name, _age);
//     this._yearsOfExperience = _yearsOfExperience;
//   }
// }

// let person1 = new Person("Jeff", 45);
// let programmer1 = new Programmer("Dom", 56, 12);

// console.log(person1);
// console.log(programmer1);

// var TimeLimited = function () {
//   this.cache = new Map();
// };

// TimeLimited.prototype.set = function (key, value, duration) {
//   const alreadyExists = this.cache.get(key);
//   if (alreadyExists) {
//     clearTimeout(timeoutId);
//   }
//   const timeoutId = setTimeout(() => {
//     this.cache.delete(key);
//   }, duration);

//   this.cache.set(key, { value, timeoutId });
//   return Boolean(alreadyExists);
// };

// TimeLimited.prototype.get = function (key, value, duration) {
//   if (this.cache.has(key)) {
//     return this.cache.get(key).value;
//   }
//   return -1;
// };

// TimeLimited.prototype.count = function () {
//   return this.cache.size;
// };

// const timeLimitedCache = new TimeLimited();
// TimeLimited.set(1, 42, 50);

var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExists = this.cache.get(key);
  if (alreadyExists) {
    clearTimeout(alreadyExists.timeoutId);
  }
  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, timeoutId });
  return Boolean(alreadyExists);
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 50);
timeLimitedCache.set(1, 50, 100);
timeLimitedCache.get(1);
timeLimitedCache.get(1);
timeLimitedCache.count();
