/*
1. якщо функція викликається без контексту в звичайному режимі - this буде посилатись на глобальний обʼєкт Window

2. якщо функція викликається без контексту в суворому режимі - this буде undefined

3. ми не можемо знати на що посилається this під час опису ф-ції (крім стрілок), this отримує своє значення тільки під час виклику ф-ції. this вказує на обʼєкт який цю функцію викликав.

4. під час передачі ф-ції в якості колбеку втрачається контекст. Тому що, під час передачі ф-ції за посиланням у вигляді аргументу - вона не викликається, а контекст отримується тільки коли обʼєкт викликав ф-цію. Коли ф-ція не викликається - контексту немає. (Функція не викликається - контекст втрачається) - проблема вирішується за допомогою .bind()

5. стрілочна ф-ція не має власного this, а позичає його зовні на момент створення. Плюс вона запамʼятовує його на весь життєвий цикл програми, тому змінити this у стрілочної ф-ції неможливо! Навіть методи call, apply, bind не зможуть цього зробити! Саме тому ніколи не можна робити стрілочні ф-ції як методи обʼєктів.
*/

// function foo() {
//   console.log(this);
// }

// function doo() {
//   foo();
// }

// doo();

// const obj = {
//   logCtx() {
//     console.log(this);
//   },
//   a: foo,
// };

// obj.logCtx();
// obj.a();

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));

// // const anonymous = {
// //   firstName: "Oleg",
// //   lastName: "Ivanow",
// //   foo: customer.getFullName
// // }

// // console.log(anonymous.foo())
// // console.log(customer.getFullName())

// const goo = () => console.log(this);

// goo();

// const roo = goo.bind({ name: "Alex" });

// roo(); // undefined

// goo.call({ name: "Nastya" }); // undefined

// function woo() {
//   console.log(this);
// }

// woo.call({ name: "Nastya" }); // obj nastya

//! ========================================

//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find((stone) => stone.name === stoneName);
//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//! ========================================

//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });
// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });

// console.log(phonebook.contacts);

//! ========================================

//* Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

//? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.

//? add() - повертає суму збережених значень.

//? mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   // read(a = 0, b = 0) {
//   //   this.a = a;
//   //   this.b = b;
//   // },

//   read(a, b) {
//     this.a = a || 0; // undefined || 0 -> 0
//     this.b = b || 0; // 10 || 0 -> 10
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 32);

// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// calculator.read();

// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

//! ========================================

// function sumAll(arr) {
//   return [...arr, ...this].reduce((sum, el) => sum + el, 0);
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(sumAll.apply(arr1, [arr2]));

//! ========================================
