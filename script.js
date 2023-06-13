// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy"; // user["mood"] = "happy"
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);
// console.log(userKeys);
// console.log(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//! ============================================

//* Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 140,
// };

// const values = Object.values(salaries);
// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

//! ============================================

//* Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// Код
// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   /*
//   1. запустити цикл на перебір масиву каменів
//     1.1. Порівняємо stoneName з ключем name у поточному обʼєкті
//     1.2. Якщо успішно - повернути добуток ціни на кількість
//   2. Повернути 0
//   */

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.quantity * stone.price;
//     }
//   }

//   return 0;
// }

// console.log(calcTotalPrice(stones, "Сапфір")); // 2800
// console.log(calcTotalPrice(stones, "Смарагд")); // 5200
// console.log(calcTotalPrice(stones, "Рубін")); // 0

//! ============================================

//* Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const TRANSACTIONS = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//       currentBalance: this.balance,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(`Недостаньо коштів! Поточний баланс: ${this.balance}`);
//     } else {
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
//       this.transactions.push(transaction);
//     }
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     /*
//       1. перебрати масив транзакцій
//         1.1. порівнюємо поточне айді транзакції з айді параметру, якщо рівне - повертаємо обʼєкт
//       2. повернути пустий обʼєкт
//     */
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return {};
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     /*
//     1. створюємо накопичувач транзакцій
//     2. перебрати масив транзакцій
//       2.1. Перевірка типу транзакції(якщо поточний тип транзакції в масиві дорівнює параметру type, то - додаємо суму в накопичував)
//     3. повертаємо накопичувач
//     */
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
// account.deposit(500);
// account.withdraw(400);
// account.withdraw(400);
// account.deposit(1000);
// account.withdraw(100);
// account.withdraw(100);
// account.deposit(100);
// account.withdraw(1000);
// account.deposit(100);
// console.log(account);

// console.log(account.getTransactionDetails(0));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));

// this це обʼєкт, який викликає ф-цію

//! ============================================

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const dogKeys = Object.keys(dog);
// console.log(dogKeys)
// for (const key of dogKeys) {
//   console.log(dog[key]);
// }
// for (const key in dog) {
//   console.log(dog[key]);
// }

// // ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

//! ============================================

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
//   debugger;
// }
