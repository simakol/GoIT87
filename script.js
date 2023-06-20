// function foo(callback, someFn) {
//   console.log(callback);
//   console.log("тут була викликана функція foo");
//   callback();
//   someFn();
// }

// function boo() {
//   console.log("Всім привіт! Я колбек функція! Передаюсь за посиланням!");
// }

// function doo() {
//   console.log("виклик ф-ції doo");
// }

// foo(boo, doo);

// не можна робити виклик функції, яку ви передаєте в якості колбеку!
//! ========================

// // func declr
// function add(a, b) {
//   return a + b;
// }

// // func expr
// const add = function (a, b) {
//   return a + b;
// };

//arrow func
// const add = (a, b) => a + b;
// const add = (a, b) => {
//   //code
//   return a + b;
// };

//! ========================

// const cars = ["BMW", "Audi", "Mersedes", "Infinity"];

// for (let i = 0; i < cars.length; i += 1) {
//   console.log(`${i + 1}: ${cars[i]}`);
// }

// cars.forEach((car, i, cars) => {
//   console.log(`${i + 1}: ${car}`);
// });

// const callback = (car, i, cars) => {
//   console.log(`${i + 1}: ${car}`);
// };

// cars.forEach(callback);

//! ========================

//* Example 1 - Коллбек функції

// Напишіть наступні функції:

//? createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//? logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//? logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

//? Виконайте рефакторинг коду за допомогою стрілочних функцій.

/*
{
    name: string,
    amount: number,
    price: number
}
*/

// function createProduct(obj, callback) {
//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ amount, price }) {
//   console.log(amount * price);
// }

// const logProduct = (product) => console.log(product);

// const logTotalPrice = ({ amount, price }) => console.log(amount * price);

// const product = {
//   name: "Cheese",
//   price: 20,
//   amount: 100,
// };

// createProduct(product, logProduct);
// createProduct(product, logTotalPrice);

//! ========================

//* Example 3 - Коллбек функції

//? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

//? Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//   /*
//     1. створюємо пустий масив
//     2. перебираємо всі елементи масиву за допомогою циклу
//         2.1. створюємо новий елемент масиву викликаючи колбек ф-цію на поточному елементі масиву
//         2.2. додати цей елемент в новий масив
//     3. повернути новий масив
//     */
//   const newArray = [];
//   for (const el of array) {
//     const newEl = callback(el);
//     newArray.push(newEl);
//   }
//   return newArray;
// }

// //------

// function square(el) {
//   return el * el;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(each(arr, square)); // [1, 4, 9, 16, 25]

// console.log(each(arr, (el) => el + 1));
// console.log(each(arr, (el) => Math.sqrt(el)));
// console.log(each(arr, (el) => 5 * el));
// console.log(each(arr, (el) => el % 2 === 0));

//! ========================

//* порахувати середнє арифметичне всіх елементів масиву за допомогою forEach

// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// arr.forEach((el) => (sum += el));

// console.log(sum / arr.length);

//! ========================
