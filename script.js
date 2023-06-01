// let userStatus = false;

// let msg = "";
// let a;

// if (userStatus) {
//   msg = "User is admin";
//   a = 5;
// } else {
//   msg = "User is not admin";
// }

// console.log(a);

// if (userStatus) msg = "User is admin";
// else msg = "User is not admin";

// msg = userStatus ? "User is admin" : "User is not admin";

// msg = `User is ${userStatus ? "" : "not "}admin`;

// console.log(msg);

// for (let i = 1; i <= 10; i += 1) {
//   for (let k = 1; k <= 5; k += 1) {
//     console.log(`i: ${i} | k: ${k}`);
//   }
// }

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) console.log(i);
// }

/*
1. 
for (let i = 1; i <= 10; i += 1) {
  if (1 % 2 === 0) console.log(i);
  1 === 0 -> false
}
2. 
for (let i = 2; i <= 10; i += 1) {
  if (2 % 2 === 0) console.log(i);
  0 === 0 -> true -> i = 2
}
3. 
for (let i = 3; i <= 10; i += 1) {
  if (3 % 2 === 0) console.log(i);
  1 === 0 -> false 
}
4. 
for (let i = 4; i <= 10; i += 1) {
  if (4 % 2 === 0) console.log(i);
  0 === 0 -> true -> i = 4 
}
*/

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) break;
//   console.log(i);
// }

/*
1.
for (let i = 1; i <= 10; i += 1) {
  if (1 % 2 === 0) break;
  console.log(i = 1); 1 === 0 -> false
}
2.
for (let i = 2; i <= 10; i += 1) {
  if (2 % 2 === 0) break; 0 === 0 -> True
  console.log(i); 
}

*/

//! ========================

//* Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

/*
1. оголосити змінну і зберегти в неї відподіть користувача на питання через ф-цію prompt
2. оголосити константу правильної відповіді - ECMAScript
3. пишемо умову у якій порівнюємо відповідь користувача з правильною відповіддю
4. якщо відповідь вірна - виводимо алерт Правильно
5. інакше - виводимо алерт Не знаєте? ECMAScript!
*/

// const CORRECT_ANSWER = "ECMAScript";
// const userAnswer = prompt("Яка офіційна назва JavaScript?");

// if (userAnswer.toLowerCase() === CORRECT_ANSWER.toLowerCase())
//   alert("Правильно");
// else alert("Не знаєте? ECMAScript!");

//! ========================

//* Example 3 - Розгалуження

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt("Введіть число"));

// if (Number.isNaN(userInput)) {
//   console.log("Ви ввели не число!");
// } else {
//   if (userInput > 0) {
//     console.log("Це позитивне число");
//   } else if (userInput < 0) {
//     console.log("Це негативне число");
//   } else {
//     console.log("Це нуль");
//   }
// }

// if (Number.isNaN(userInput)) {
//   console.log("Ви ввели не число!");
// } else if (userInput > 0) {
//   console.log("Це позитивне число");
// } else if (userInput < 0) {
//   console.log("Це негативне число");
// } else {
//   console.log("Це нуль");
// }

//! ========================

//* Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// const result = a > 100 && b > 100 ? Math.max(a, b) : b + 512;

// console.log(result);

//! ========================

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;

//   default:
//     console.log("Дата у майбутньому");
// }

//! ========================

//* Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 23;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// for (let i = max; i >= min; i -= 1) {
//   if (i % 5 === 0) console.log(i);
// }

//! ========================

//* Example 12 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const userLogin = prompt("Enter your login: ");

// if (userLogin === "Admin") {
//   const pass = prompt("Enter your password: ");

//   if (pass === "I am admin") {
//     console.log("Hello");
//   } else {
//     console.log("Wrong password");
//   }
// } else if (userLogin === "") {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

//! ========================

// let a = 5;

// if (a === 5) {
//   console.log("a === 5");
// } else {
//   console.log("a !== 5");
// }

//! ========================

// let a = "a";
// let b = (a === "a") ? "Win" : "Lose";

//! ========================

// let a = 11;

// if (a >= 0 && a <= 10) {
//   console.log("Змінна а входить у діапазон");
// } else {
//   console.log("Змінна а не входить у діапазон");
// }

// console.log(1 && true && "hello" && 18);
// "0" -> true