// let a = "5"; // string
// let b = 5; // number

// console.log(a == b); // "5" == "5" -> true
// // порівнювати різні типи неможливо, тому цей оператор приведе все до одного типу

// console.log(a === b); // a: string === b: number -> string !== number -> false

// console.log(100 - 2 - "30"); //68
// console.log(100 + 2 + "30"); //"10230"
// // + це оператор конкатенації строк і коли він стоїть біля стрінга, сусідні операнди перетворюються на строки і вони склеюються між собою
// // всі інші математичні оператори при роботі з числом і строкою перетворять строку на число і на виході ви отримаєте число

// const username = "Al ex ex";

// console.log(username.indexOf("ex"));

// console.log(typeof NaN);

// console.log(NaN === NaN);
// console.log(NaN == NaN);
// //NaN не дорівнює саме собі

// const n = Number("27.5px");

// console.log(Number.isNaN(n));

//! ==============================

//* Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// // const diff = grapes - apples;
// const diff = Math.abs(apples - grapes);
// console.log(diff);

//! ==============================

//* Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50;
// students *= 2;
// students /= 3;
// console.log(students);

//! ==============================

//* Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// // 1. 2 * 5 = 10 -> 108 + 223 - 10
// // 2. 108 + 223 = 331 -> 331 - 10
// // 3. 331 - 10 = 321
// console.log(result);

//! ==============================

//* Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.499999999999;

// console.log(Math.floor(value)); // 27.5 -> 27
// console.log(Math.ceil(value)); // 27.1 -> 28
// console.log(Math.round(value)); // 27.4 -> 27 | 27.5 -> 28

// console.log(Number(value.toFixed(2))); // завжди повертає string!!!

//! ==============================

//* Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// console.log("\"sfsdf\"")

//! ==============================

//* Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));

// console.log(weight, height);

// const bmi = Number((weight / (height * height)).toFixed(1));
// // const bmi = weight / height ** 2;
// // const bmi = weight / Math.pow(height, 2);
// console.log(bmi); // 28.8

// let username = "#alex#!"

// console.log(username.replaceAll("#", "$"))
// console.log(username.replace("!", ""))

//! ==============================

//* Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); // true

// console.log(10 >= "7"); // true

// console.log("2" > "12"); //true

// console.log("1".charCodeAt(0));

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); // false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log("0" == false); // true
// console.log(Number("0"));
// console.log(Number(false));
// 0 == 0 -> true

// console.log('0' === false); // false

// console.log("Papaya" < "papaya"); // true
// console.log("P".charCodeAt(0)); // 80
// console.log("p".charCodeAt(0)); // 112

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null); // true

// console.log(undefined === null); //false

//! ==============================

//* Example 8 - Логічні оператори
// Яким буде результат виразів?

// Логічне І - && - повертає перше false
// Логічне АБО - || - повертає перше true
// в іншому випадку - повертається останнє значення
// Логічне НІ - ! - змінює логічний тип значення на зворотній

// ПЕРЕТВОРЕННЯ ТИПІВ BOOL
// TRUE: будь-які числа чи цифри, окрім 0, будь-які рядки у яких є символи
// FALSE: 0, пустрий рядок, null, undefined, NaN

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); //kiwi

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0);
//1 && null && 2 -> null
// null > 0 -> 0 > 0 -> false

// console.log(null || (2 && 3) || 4);
// 1. 2 && 3 -> 3
// 2. null || 3 || 4 -> 3

//! ==============================

// console.log(!3); // !Boolean(3) -> !true -> false
// console.log(!0);

// console.log(!"Alex") // !Boolean("Alex") -> !true -> false
// console.log(!"")

// console.log(!!-6)

//! ==============================
