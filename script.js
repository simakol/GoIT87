// class Parent {
//   constructor(value) {
//     this.value = value;
//   }

//   showValue() {
//     console.log(this.value);
//   }
// }

// const parent = new Parent("hello world");

// console.log(parent);

// class Child extends Parent {
//   constructor(value, arg) {
//     super(value);
//     this.arg = arg;
//     console.log("hello!!!");
//   }
// }

// const child = new Child("hello", "world");

// console.log(child);
// child.showValue();

//! ===========================

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };

// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Привіт, раді вітати на сайті");
// greetGuest.call(poly, "Привіт, раді вітати на сайті");

// greetGuest.apply(poly, ["Привіт, раді вітати на сайті"]);

// const greetPoly = greetGuest.bind(poly, "Привіт, раді вітати на сайті");

// greetPoly()

//! ===========================

// const boo = () => console.log(this);

// boo();

// boo.call({ username: "Mango" });

//! ===========================

// function sumAll(...args) {
//   //   console.log(arguments);
//   console.log(args);
//   console.log(args.reduce((sum, el) => sum + el, 0));
// }

// sumAll(5, 4, 3, 8, 9, 10);
// sumAll(5, 4);
// sumAll(7, 9, 8, 4);

//! ===========================

// let word = prompt("Я загадав слово. Відгадай: ");
// const CORRECT_WORD = "джс";

// while (word !== CORRECT_WORD) {
//   word = prompt("Невірно! Спробуй ще раз!");
// }

// alert("Ура! Ти вгадав!");

//! ===========================

// let word = "";
// const CORRECT_WORD = "джс";

// do {
//   word = prompt("Я загадав слово. Відгадай: ");
// } while (word !== CORRECT_WORD);

// alert("Ура! Ти вгадав!");

//! ===========================

// const user = {
//   username: "Oleg",
//   age: 28,
//   isAdmin: false,
// };

// const { username, age: userAge } = user;
// // const username = user.username
// // const userAge = user.age

// console.log(username);
// console.log(userAge);

//! ===========================

// function callCenter(number, callback) {
//   console.log("Чекаємо поки звільняться оператор...");
//   console.log("Є вільний оператор");
//   callback(number);
//   console.log("Розмова завершена!");
// }

// function call(number) {
//   console.log(`Телефонуємо по номеру ${number}`);
// }

// callCenter("+38(098)-555-33-22", call);

//! ===========================

// function showMsg(msg) {
//   console.log(msg);
// }

// showMsg("hello");

// function sum(a, b) {
//   return a + b;
// }

// const result = 5 + sum(10, 6);

// console.log(result);

//! ===========================

// const arr = [1, 6, 6, 4, 1, 6, 6, 9, 44, 55, 6, 1, 9, 44];

// const uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);

//! ===========================

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
//   debugger;
// }

//! ===========================

// const arr = [1, 2, 3];

// const result = arr.reduce((acc, el) => acc + el, 0);

// console.log(result);

/*
1. 
arr.reduce((acc = 0, el = 1) => 0 + 1 = 1, 0);
2. 
arr.reduce((acc = 1, el = 2) => 1 + 2 = 3, 0);
3. 
arr.reduce((acc = 3, el = 3) => 3 + 3 = 6, 0); // 6
*/

//! ===========================

// поясніть будласка як в даному прикладі працює тернарний оператор

// const peopleWithAgeDrink = (age) =>
//   age < 14
//     ? "drink toddy"
//     : age < 18
//     ? "drink coke"
//     : age < 21
//     ? "drink beer"
//     : "drink whisky";

// if (age < 14) {
//   return "drink toddy";
// } else {
//   if (age < 18) {
//     return "drink coke";
//   } else {
//     if (age < 21) {
//       return "drink beer";
//     } else {
//       return "drink whisky";
//     }
//   }
// }

// console.log(peopleWithAgeDrink(8));

//! ===========================

// const arr = [1, 5, 7, 3, 9];

// console.log(Math.min(...arr));

// function doo(...args) {
//   console.log(args);
// }

// doo(1, 4, 5);
// doo(1, 4, 5, 6, 5, 4, 3, 7);

//! ===========================

// function makeFunc() {
//   const car = "Infinity";
//   function showCar() {
//     console.log(car);
//   }
//   return showCar;
// }

// const myFunc = makeFunc();

// myFunc()
// myFunc()
// myFunc()
// myFunc()

//! ===========================

// function counter() {
//   let i = 0;
//   return function () {
//     console.log(i);
//     i += 1;
//   };
// }

// const count = counter();

// count()
// count()
// count()
// count()
// count()