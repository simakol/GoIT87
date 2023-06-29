// class Rectangle {
//   static angle = 90;
//   #angleNumber;

//   constructor(heigth, width, color = "white") {
//     this.heigth = heigth;
//     this.width = width;
//     this.color = color;
//     this.name = "Rectangle";
//     this.#angleNumber = 4;
//   }

//   sayHello() {
//     console.log(`Hello, I am ${this.name}. My color is ${this.color}.`);
//   }

//   calculateArea() {
//     return this.heigth * this.width;
//   }

//   sumOfAllAngles() {
//     return Rectangle.angle * this.#angleNumber;
//   }

//   get angleNumber() {
//     return this.#angleNumber;
//   }

//   set angleNumber(newAngleNumber) {
//     this.#angleNumber = newAngleNumber;
//   }
// }

// class Square extends Rectangle {
//   constructor(length, color = "white") {
//     super(length, length, color);
//     this.name = "Square";
//   }
// }

// const rectangle = new Rectangle(5, 10, "blue");

// console.log(rectangle);

// rectangle.sayHello();

// console.log(rectangle.calculateArea());

// console.log(rectangle.sumOfAllAngles());

// const square = new Square(3, "purple");
// console.log(square);

// square.sayHello();
// console.log(square.calculateArea());

// rectangle.angleNumber = 99;
// console.log(rectangle.angleNumber);

// const rectangle2 = new Rectangle(2, 5, "red");
// console.log(rectangle2);

// rectangle2.sayHello();

// console.log(rectangle2.calculateArea());

// console.log(rectangle2.sumOfAllAngles());

// console.dir(Array);

// const arr = new Array(1, 2, 3);

// console.log(arr);

//! ========================================

//* Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   //   constructor({ isOpen } = { isOpen: false }) {
//   //     this.on = isOpen;
//   //   }
//   constructor(settings) {
//     this.on = settings?.isOpen || false;
//   }

//   toggle() {
//     this.on = !this.on; //!true -> false | !false -> true
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");
